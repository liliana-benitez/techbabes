"use client"
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Country, State } from "country-state-city"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

const checkoutSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State is required"),
  zip: z.string().min(3, "ZIP code must be at least 3 characters"),
  country: z.string().min(2, "Country is required")
})

type CheckoutData = z.infer<typeof checkoutSchema>

interface FormErrors {
  [key: string]: string
}

function StripePaymentForm({
  onPaymentSuccess
}: {
  formData: CheckoutData
  errors: FormErrors
  isProcessing: boolean
  onPaymentSuccess: () => void
}) {
  const stripe = useStripe()
  const elements = useElements()
  const { clearCart } = useCart()
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePaymentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      setPaymentError("Stripe not loaded")
      return
    }

    setIsSubmitting(true)
    setPaymentError(null)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required"
      })

      if (error) {
        setPaymentError(error.message || "Payment failed")
        setIsSubmitting(false)
        return
      }

      if (paymentIntent.status === "succeeded") {
        clearCart()
        onPaymentSuccess()
      }
    } catch (err) {
      setPaymentError(err instanceof Error ? err.message : "An error occurred")
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handlePaymentSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Payment Details</h3>
        <PaymentElement />
      </div>

      {paymentError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {paymentError}
        </div>
      )}

      <Button
        type="submit"
        className="btn-primary w-full h-12 text-lg"
        disabled={!stripe || isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Complete Payment"}
      </Button>
    </form>
  )
}

function CheckoutContent() {
  const router = useRouter()
  const { items, total } = useCart()
  const [formData, setFormData] = useState<CheckoutData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US"
  })

  const countries = useMemo(() => {
    return Country.getAllCountries().map((c) => ({
      code: c.isoCode,
      name: c.name
    }))
  }, [])

  const states = useMemo(() => {
    if (!formData.country) return []
    return State.getStatesOfCountry(formData.country).map((s) => ({
      code: s.isoCode,
      name: s.name
    }))
  }, [formData.country])

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [paymentStarted, setPaymentStarted] = useState(false)
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setIsLoading(true)

    try {
      checkoutSchema.parse(formData)

      // Create payment intent
      const paymentIntentRes = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(total * 100),
          cartItems: items.map((item) => ({
            id: item.id.toString(),
            quantity: item.quantity,
            price: Math.round(parseFloat(item.price.toString()) * 100),
            printfulVariantId: item.printfulVariantId
          })),
          customerEmail: formData.email,
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerPhone: formData.phone,
          shippingAddress1: formData.address,
          shippingCity: formData.city,
          shippingState: formData.state,
          shippingZip: formData.zip,
          shippingCountry: formData.country
        })
      })

      if (!paymentIntentRes.ok) {
        throw new Error("Failed to create payment intent")
      }

      const { clientSecret } = await paymentIntentRes.json()
      setClientSecret(clientSecret)
      setPaymentStarted(true)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)

      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {}
        error.issues.forEach((issue) => {
          const path = issue.path[0]
          if (typeof path === "string" || typeof path === "number") {
            newErrors[path.toString()] = issue.message
          }
        })
        setErrors(newErrors)
      } else {
        setErrors({
          submit:
            error instanceof Error
              ? error.message
              : "An error occurred. Please try again."
        })
      }
    }
  }

  const handlePaymentSuccess = () => {
    router.push("/thank-you")
  }

  const renderInput = (
    name: keyof CheckoutData,
    label: string,
    placeholder: string,
    type: string = "text"
  ) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleInputChange}
        disabled={paymentStarted}
        className={errors[name] ? "border-red-500" : ""}
      />
      {errors[name] && <p className="text-sm text-red-500">{errors[name]}</p>}
    </div>
  )

  const renderSelect = (
    name: keyof CheckoutData,
    label: string,
    options: Array<{ code: string; name: string }>
  ) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        disabled={paymentStarted}
        className={`w-full px-3 py-2 border rounded ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.name}
          </option>
        ))}
      </select>
      {errors[name] && <p className="text-sm text-red-500">{errors[name]}</p>}
    </div>
  )

  if (paymentStarted && clientSecret) {
    return (
      <div className="px-4 py-12 max-w-2xl mx-auto">
        <h1 className="font-display font-bold text-3xl mb-8">
          Complete Payment
        </h1>
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe"
            }
          }}
        >
          <StripePaymentForm
            formData={formData}
            errors={errors}
            isProcessing={isLoading}
            onPaymentSuccess={handlePaymentSuccess}
          />
        </Elements>
      </div>
    )
  }

  return (
    <div className="px-4 py-12 max-w-3xl mx-auto">
      <h1 className="font-display font-bold text-3xl mb-8">Checkout</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Information</h3>
            {renderInput("email", "Email", "you@example.com", "email")}
            {renderInput("phone", "Phone Number", "+1 (555) 123-4567")}
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Shipping Address</h3>
            <div className="grid grid-cols-2 gap-4">
              {renderInput("firstName", "First Name", "Ada")}
              {renderInput("lastName", "Last Name", "Lovelace")}
            </div>
            {renderInput("address", "Street Address", "123 Tech St")}
            <div className="grid grid-cols-2 gap-4">
              {renderInput("city", "City", "San Francisco")}
              {renderInput("zip", "ZIP Code", "94105")}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {renderSelect("country", "Country", countries)}
              {renderSelect("state", "State/Province", states)}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Order Summary</h3>
            <div className="bg-gray-50 p-4 rounded space-y-2">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.printfulVariantId}`}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {errors.submit && (
            <p className="text-sm text-red-500">{errors.submit}</p>
          )}

          <Button
            type="submit"
            className="btn-primary w-full h-12 text-lg mt-8"
            disabled={isLoading || items.length === 0}
          >
            {isLoading ? "Validating..." : "Continue to Payment"}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default function Checkout() {
  return <CheckoutContent />
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { AlertCircleIcon, Mail } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Alert, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"
import etsy from "../../../public/etsy.svg"
import instagram from "../../../public/instagram.svg"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.")
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: ""
  })

  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [submitting] = useState(false)

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = formSchema.safeParse(values)

    if (!result.success) {
      const fieldErrors: Partial<FormValues> = {}
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormValues
        fieldErrors[fieldName] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    // Submit to Next.js API
    // toast alert
  }

  return (
    <div className="flex flex-col gap-12 px-20 py-12">
      <h1 className="font-display font-bold text-3xl md:text-4xl">
        Contact Us
      </h1>
      <div className="grid md:grid-cols-2 gap-12 mx-auto w-full">
        {/* Left info section */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:thetechbabes.inc@gmail.com"></a>
                thetechbabes.inc@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Image
                src={instagram}
                alt="Instagram logo"
                height={25}
                width={25}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Instagram</h3>
              <p className="text-muted-foreground">
                <a href="https://www.instagram.com/thetechbabes">
                  @thetechbabes
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Image src={etsy} alt="Etsy logo" height={20} width={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Etsy</h3>
              <p className="text-muted-foreground">
                <a href="https://etsy.com/shop/TheTechBabes">
                  etsy.com/shop/TheTechBabes
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right form section */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <Label>Name</Label>
            <Input
              placeholder="Ada Lovelace"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.name && (
              <Alert className="border-none" variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>{errors.name}</AlertTitle>
              </Alert>
            )}

            {/* Email */}
            <Label>Email</Label>
            <Input
              placeholder="ada@example.com"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && (
              <Alert className="border-none" variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>{errors.email}</AlertTitle>
              </Alert>
            )}

            {/* Message */}
            <Label>Message</Label>
            <Textarea
              placeholder="Tell us what's on your mind..."
              className="min-h-[150px]"
              value={values.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
            {errors.message && (
              <Alert className="border-none" variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>{errors.message}</AlertTitle>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

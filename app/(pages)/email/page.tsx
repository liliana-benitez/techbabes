import { OrderConfirmationEmail } from "@/components/email-template"

export default function Page() {
  return (
    <OrderConfirmationEmail
      customerName={"Ada Lovelace"}
      orderNumber={"#TT-2026-0001"}
      orderDate={"January 13, 2026"}
      items={[
        {
          name: "Developer Hoodie",
          variant: "Black / L",
          quantity: 1,
          price: 45.0
        },
        {
          name: "Code & Coffee Mug",
          variant: "White",
          quantity: 2,
          price: 15.0
        }
      ]}
      subtotal={75.0}
      shipping={8.0}
      total={83.0}
      shippingAddress={{
        street: "123 Tech Street",
        city: "San Francisco",
        state: "CA",
        zip: "94105"
      }}
    />
  )
}

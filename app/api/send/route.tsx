import { OrderConfirmationEmail } from "../../../components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: "Tech Babes <onboarding@resend.dev>",
    to: ["lilyybenitezz@gmail.com"],
    subject: "Order Confirmation",
    react: (
      <OrderConfirmationEmail
        customerName={"Lili Benitez"}
        orderNumber={"#TT-2026-0001"}
        orderDate={"January 24, 2026"}
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
  })

  if (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 })
  }

  return Response.json(data)
}

import { OrderConfirmationEmail } from "../../../components/email-template"
import { Resend } from "resend"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    customerName,
    customerEmail,
    orderNumber,
    orderDate,
    items,
    subtotal,
    shipping,
    total,
    shippingAddress
  } = body

  const { data, error } = await resend.emails.send({
    from: "Tech Babes <orders@techbabes.dev>", // use your verified domain
    to: [customerEmail],
    subject: "Order Confirmation",
    react: (
      <OrderConfirmationEmail
        customerName={customerName}
        orderNumber={orderNumber}
        orderDate={orderDate}
        items={items}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        shippingAddress={shippingAddress}
      />
    )
  })

  if (error) {
    // console.log(error)
    return Response.json({ error }, { status: 500 })
  }

  return Response.json(data)
}

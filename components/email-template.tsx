import * as React from "react"

interface OrderItem {
  name: string
  variant: string
  quantity: number
  price: number
}

interface OrderConfirmationEmailProps {
  customerName: string
  orderNumber: string
  orderDate: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
  shippingAddress: {
    street: string
    city: string
    state: string
    zip: string
  }
}

export const OrderConfirmationEmail: React.FC<OrderConfirmationEmailProps> = ({
  customerName = "Ada Lovelace",
  orderNumber = "#TT-2026-0001",
  orderDate = "January 13, 2026",
  items = [
    {
      name: "Developer Hoodie",
      variant: "Black / L",
      quantity: 1,
      price: 45.0
    },
    { name: "Code & Coffee Mug", variant: "White", quantity: 2, price: 15.0 }
  ],
  subtotal = 75.0,
  shipping = 8.0,
  total = 83.0,
  shippingAddress = {
    street: "123 Tech Street",
    city: "San Francisco",
    state: "CA",
    zip: "94105"
  }
}) => {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#fafafa",
        padding: "40px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "40px 32px",
            textAlign: "center"
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: "700",
              margin: "0 0 8px 0",
              letterSpacing: "-0.5px"
            }}
          >
            Order Confirmed! 🎉
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "16px",
              margin: "0"
            }}
          >
            Thanks for shopping with The Tech Babes
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          {/* Greeting */}
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              lineHeight: "1.6",
              margin: "0 0 24px 0"
            }}
          >
            Hey {customerName}! 👋
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#6b7280",
              lineHeight: "1.6",
              margin: "0 0 32px 0"
            }}
          >
            We&apos;re excited to let you know that your order has been
            confirmed and is being prepared for shipment. You&apos;ll receive
            another email with tracking information once your items are on their
            way.
          </p>

          {/* Order Details Box */}
          <div
            style={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "32px"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px"
              }}
            >
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Order Number
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#1f2937",
                  fontWeight: "600",
                  fontFamily: "monospace"
                }}
              >
                {orderNumber}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Order Date
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#1f2937",
                  fontWeight: "500"
                }}
              >
                {orderDate}
              </span>
            </div>
          </div>

          {/* Order Items */}
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#1f2937",
              margin: "0 0 16px 0"
            }}
          >
            Order Summary
          </h2>

          <div style={{ marginBottom: "24px" }}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "16px 0",
                  borderBottom:
                    index !== items.length - 1 ? "1px solid #e5e7eb" : "none"
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#1f2937",
                      fontWeight: "500",
                      marginBottom: "4px"
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6b7280"
                    }}
                  >
                    {item.variant} • Qty: {item.quantity}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    color: "#1f2937",
                    fontWeight: "600"
                  }}
                >
                  ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "32px"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px"
              }}
            >
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Subtotal
              </span>
              <span style={{ fontSize: "14px", color: "#1f2937" }}>
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                paddingBottom: "12px",
                borderBottom: "1px solid #e5e7eb"
              }}
            >
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Shipping
              </span>
              <span style={{ fontSize: "14px", color: "#1f2937" }}>
                ${shipping.toFixed(2)}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#1f2937",
                  fontWeight: "700"
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: "#667eea",
                  fontWeight: "700"
                }}
              >
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Shipping Address */}
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#1f2937",
              margin: "0 0 12px 0"
            }}
          >
            Shipping Address
          </h3>
          <div
            style={{
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: "1.6",
              marginBottom: "32px"
            }}
          >
            {shippingAddress.street}
            <br />
            {shippingAddress.city}, {shippingAddress.state}{" "}
            {shippingAddress.zip}
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <a
              href="#"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                transition: "transform 0.2s"
              }}
            >
              Track Your Order
            </a>
          </div>

          {/* Footer Message */}
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              textAlign: "center",
              lineHeight: "1.6",
              margin: "0"
            }}
          >
            Questions about your order? Reply to this email or reach us at{" "}
            <a
              href="mailto:thetechbabes.inc@gmail.com"
              style={{ color: "#667eea", textDecoration: "none" }}
            >
              thetechbabes.inc@gmail.com
            </a>
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "24px 32px",
            textAlign: "center",
            borderTop: "1px solid #e5e7eb"
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "#9ca3af",
              margin: "0 0 12px 0"
            }}
          >
            Follow us for updates and new releases
          </p>
          <div style={{ marginBottom: "16px" }}>
            <a
              href="https://www.instagram.com/thetechbabes"
              style={{
                display: "inline-block",
                margin: "0 8px",
                color: "#667eea",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "500"
              }}
            >
              Instagram
            </a>
            <span style={{ color: "#d1d5db" }}>•</span>
            <a
              href="https://etsy.com/shop/TheTechBabes"
              style={{
                display: "inline-block",
                margin: "0 8px",
                color: "#667eea",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "500"
              }}
            >
              Etsy
            </a>
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              margin: "0"
            }}
          >
            © 2026 The Tech Babes. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

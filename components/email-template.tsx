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

// Reusable two-column row — Gmail mobile safe via explicit width% on each td
const TwoColRow = ({
  label,
  value,
  labelStyle,
  valueStyle,
  paddingTop = "0px",
  paddingBottom = "0px"
}: {
  label: React.ReactNode
  value: React.ReactNode
  labelStyle?: React.CSSProperties
  valueStyle?: React.CSSProperties
  paddingTop?: string
  paddingBottom?: string
}) => (
  <tr>
    <td
      width="50%"
      style={{
        fontSize: "14px",
        color: "#6b7280",
        paddingTop,
        paddingBottom,
        verticalAlign: "middle",
        ...labelStyle
      }}
    >
      {label}
    </td>
    <td
      width="50%"
      style={{
        fontSize: "14px",
        color: "#1f2937",
        textAlign: "right",
        paddingTop,
        paddingBottom,
        verticalAlign: "middle",
        ...valueStyle
      }}
    >
      {value}
    </td>
  </tr>
)

export const OrderConfirmationEmail: React.FC<OrderConfirmationEmailProps> = ({
  customerName,
  orderNumber,
  orderDate,
  items,
  subtotal,
  shipping,
  total,
  shippingAddress
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
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{ borderCollapse: "collapse" }}
      >
        <tr>
          <td align="center">
            <table
              width="600"
              cellPadding="0"
              cellSpacing="0"
              style={{
                borderCollapse: "collapse",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                maxWidth: "100%"
              }}
            >
              {/* Header */}
              <tr>
                <td
                  style={{
                    padding: "40px 32px",
                    textAlign: "center",
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(https://agwjluscdhpcsuyraogh.supabase.co/storage/v1/object/public/Tech%20Babes/Hats/Tech-Babes-Logo-Embroidered-Baseball-Hat/pink-2.jpg) center 15% / cover no-repeat"
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
                    Order Confirmed!
                  </h1>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "16px",
                      margin: "0"
                    }}
                  >
                    Thanks for shopping with Tech Babes
                  </p>
                </td>
              </tr>

              {/* Content */}
              <tr>
                <td style={{ padding: "32px" }}>
                  {/* Greeting */}
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#1f2937",
                      lineHeight: "1.6",
                      margin: "0 0 24px 0"
                    }}
                  >
                    Hey {customerName}!
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
                    confirmed and is being prepared for shipment. You&apos;ll
                    receive another email with tracking information once your
                    items are on their way.
                  </p>

                  {/* Order Details Box */}
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{
                      borderCollapse: "collapse",
                      backgroundColor: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      marginBottom: "32px"
                    }}
                  >
                    <tr>
                      <td style={{ padding: "20px 20px 8px 20px" }}>
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <TwoColRow
                            label="Order Number"
                            value={orderNumber}
                            valueStyle={{
                              fontWeight: "600",
                              fontFamily: "monospace"
                            }}
                          />
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0 20px 20px 20px" }}>
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <TwoColRow
                            label="Order Date"
                            value={orderDate}
                            valueStyle={{ fontWeight: "500" }}
                          />
                        </table>
                      </td>
                    </tr>
                  </table>

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

                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ borderCollapse: "collapse", marginBottom: "24px" }}
                  >
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td
                          width="70%"
                          style={{
                            padding: "16px 0",
                            verticalAlign: "top",
                            borderBottom:
                              index !== items.length - 1
                                ? "1px solid #e5e7eb"
                                : "none"
                          }}
                        >
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
                          <div style={{ fontSize: "13px", color: "#6b7280" }}>
                            {item.variant} • Qty: {item.quantity}
                          </div>
                        </td>
                        <td
                          width="30%"
                          style={{
                            padding: "16px 0",
                            fontSize: "15px",
                            color: "#1f2937",
                            fontWeight: "600",
                            textAlign: "right",
                            verticalAlign: "top",
                            borderBottom:
                              index !== items.length - 1
                                ? "1px solid #e5e7eb"
                                : "none"
                          }}
                        >
                          ${item.price.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </table>

                  {/* Pricing Summary */}
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{
                      borderCollapse: "collapse",
                      backgroundColor: "#f9fafb",
                      borderRadius: "8px",
                      marginBottom: "32px"
                    }}
                  >
                    <tr>
                      <td style={{ padding: "20px 20px 0 20px" }}>
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <TwoColRow
                            label="Subtotal"
                            value={`$${subtotal.toFixed(2)}`}
                            paddingBottom="12px"
                          />
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0 20px",
                          borderBottom: "1px solid #e5e7eb"
                        }}
                      >
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <TwoColRow
                            label="Shipping"
                            value={`$${shipping.toFixed(2)}`}
                            paddingBottom="12px"
                          />
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "12px 20px 20px 20px" }}>
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <TwoColRow
                            label="Total"
                            value={`$${total.toFixed(2)}`}
                            labelStyle={{
                              fontSize: "16px",
                              color: "#1f2937",
                              fontWeight: "700"
                            }}
                            valueStyle={{
                              fontSize: "16px",
                              color: "#f589bf",
                              fontWeight: "700"
                            }}
                          />
                        </table>
                      </td>
                    </tr>
                  </table>

                  {/* Shipping Address */}
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#1f2937",
                      margin: "0 0 12px 0"
                    }}
                  >
                    Shipping Information
                  </h3>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                      lineHeight: "1.6",
                      marginBottom: "32px"
                    }}
                  >
                    {customerName}
                    <br />
                    {shippingAddress.street}
                    <br />
                    {shippingAddress.city}, {shippingAddress.state}{" "}
                    {shippingAddress.zip}
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
                    Questions about your order? Reply to this email or reach us
                    at{" "}
                    <a
                      href="mailto:thetechbabes.inc@gmail.com"
                      style={{ color: "#667eea", textDecoration: "none" }}
                    >
                      thetechbabes.inc@gmail.com
                    </a>
                  </p>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td
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
                  <p style={{ margin: "0 0 16px 0" }}>
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
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#9ca3af",
                      margin: "0"
                    }}
                  >
                    © 2026 The Tech Babes. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
}

"use client"

import {
  Package,
  Clock,
  Globe,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const categories = [
  {
    id: "apparel",
    label: "Shirts & Apparel",
    icon: "👕",
    rates: [
      {
        region: "🇺🇸 USA",
        standard: "$4.75",
        additional: "+$2.20",
        time: "3–4 business days"
      },
      {
        region: "🇨🇦 Canada",
        standard: "$8.29",
        additional: "+$1.95",
        time: "5–20 business days"
      },
      {
        region: "🇬🇧 UK",
        standard: "$4.59",
        additional: "+$1.50",
        time: "5–20 business days"
      },
      {
        region: "🇪🇺 Europe",
        standard: "$4.79",
        additional: "+$1.45",
        time: "5–20 business days"
      },
      {
        region: "🇦🇺 Australia / NZ",
        standard: "$7.19",
        additional: "+$1.30",
        time: "5–20 business days"
      },
      {
        region: "🌍 Worldwide",
        standard: "$11.99",
        additional: "+$6.00",
        time: "5–20 business days"
      }
    ]
  },
  {
    id: "hoodies",
    label: "Hoodies & Sweatshirts",
    icon: "🧥",
    rates: [
      {
        region: "🇺🇸 USA",
        standard: "$8.49",
        additional: "+$2.50",
        time: "3–4 business days"
      },
      {
        region: "🇨🇦 Canada",
        standard: "$10.19",
        additional: "+$2.35",
        time: "5–20 business days"
      },
      {
        region: "🇬🇧 UK",
        standard: "$6.99",
        additional: "+$2.40",
        time: "5–20 business days"
      },
      {
        region: "🇪🇺 Europe",
        standard: "$6.99",
        additional: "+$2.40",
        time: "5–20 business days"
      },
      {
        region: "🇦🇺 Australia / NZ",
        standard: "$11.29",
        additional: "+$2.05",
        time: "5–20 business days"
      },
      {
        region: "🌍 Worldwide",
        standard: "$16.99",
        additional: "+$8.00",
        time: "5–20 business days"
      }
    ]
  },
  {
    id: "hats",
    label: "Hats & Beanies",
    icon: "🧢",
    rates: [
      {
        region: "🇺🇸 USA",
        standard: "$4.49",
        additional: "+$2.00",
        time: "3–4 business days"
      },
      {
        region: "🇨🇦 Canada",
        standard: "$6.99",
        additional: "+$1.95",
        time: "5–20 business days"
      },
      {
        region: "🇬🇧 UK",
        standard: "$4.39",
        additional: "+$1.50",
        time: "5–20 business days"
      },
      {
        region: "🇪🇺 Europe",
        standard: "$4.59",
        additional: "+$1.45",
        time: "5–20 business days"
      },
      {
        region: "🇦🇺 Australia / NZ",
        standard: "$7.19",
        additional: "+$1.30",
        time: "5–20 business days"
      },
      {
        region: "🌍 Worldwide",
        standard: "$11.99",
        additional: "+$6.00",
        time: "5–20 business days"
      }
    ],
    note: "Hats always ship separately from other items due to packaging requirements."
  },
  {
    id: "bags",
    label: "Bags & Accessories",
    icon: "👜",
    rates: [
      {
        region: "🇺🇸 USA",
        standard: "$4.49",
        additional: "+$2.00",
        time: "3–4 business days"
      },
      {
        region: "🇨🇦 Canada",
        standard: "$6.99",
        additional: "+$1.95",
        time: "5–20 business days"
      },
      {
        region: "🇬🇧 UK",
        standard: "$4.39",
        additional: "+$1.50",
        time: "5–20 business days"
      },
      {
        region: "🇪🇺 Europe",
        standard: "$4.59",
        additional: "+$1.45",
        time: "5–20 business days"
      },
      {
        region: "🇦🇺 Australia / NZ",
        standard: "$7.19",
        additional: "+$1.30",
        time: "5–20 business days"
      },
      {
        region: "🌍 Worldwide",
        standard: "$11.99",
        additional: "+$6.00",
        time: "5–20 business days"
      }
    ]
  },
  {
    id: "mugs",
    label: "Mugs & Drinkware",
    icon: "☕",
    rates: [
      {
        region: "🇺🇸 USA",
        standard: "$6.49",
        additional: "+$3.50",
        time: "3–4 business days"
      },
      {
        region: "🇨🇦 Canada",
        standard: "$7.79",
        additional: "+$4.70",
        time: "5–20 business days"
      },
      {
        region: "🇬🇧 UK",
        standard: "$4.99",
        additional: "+$1.25",
        time: "5–20 business days"
      },
      {
        region: "🇪🇺 Europe",
        standard: "$5.19",
        additional: "+$2.05",
        time: "5–20 business days"
      },
      {
        region: "🇦🇺 Australia / NZ",
        standard: "$8.39",
        additional: "+$3.65",
        time: "5–20 business days"
      },
      {
        region: "🌍 Worldwide",
        standard: "$11.99",
        additional: "+$6.50",
        time: "5–20 business days"
      }
    ],
    note: "Mugs always ship separately from other items due to packaging requirements."
  }
]

const faqs = [
  {
    q: "How long does fulfillment take?",
    a: "All orders are made on demand by Printful. Fulfillment takes 2–5 business days before your order ships. Shipping time is on top of this."
  },
  {
    q: "Will my order arrive in one package?",
    a: "Not always! Hats, mugs, and some accessories are always shipped separately due to their packaging. If your order contains multiple item types, you may receive multiple packages, each with their own tracking number."
  },
  {
    q: "Will I be charged customs fees?",
    a: "International orders may be subject to customs fees or import duties depending on your country. These charges are beyond our control and are the responsibility of the customer."
  },
  {
    q: "My order is past the estimated delivery date, what do I do?",
    a: "First, allow 1–2 extra days as delays can happen. If your order still hasn't arrived, reach out to us via the contact page and we'll look into it right away."
  },
  {
    q: "Do you ship to all countries?",
    a: "We ship almost everywhere, but Printful does not ship to Russia, Belarus, Cuba, Iran, North Korea, Syria, Ecuador, and some regions of Ukraine. If you're unsure, feel free to contact us."
  }
]

export default function ShippingPage() {
  return (
    <div className="flex flex-col gap-12 px-4 md:px-20 py-12">
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Shipping & Returns
        </h1>
        <p className="text-muted-foreground text-sm">
          Last updated{" "}
          <strong className="text-foreground">February 25, 2026</strong>
        </p>
      </div>

      {/* How it works */}
      <section>
        <h2 className="font-display font-bold text-2xl mb-6">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: <Package className="h-6 w-6" />,
              label: "Fulfillment",
              desc: "2–5 business days to create and pack your order."
            },
            {
              icon: <Clock className="h-6 w-6" />,
              label: "Shipping",
              desc: "A carrier picks up your order and ships it to your address."
            },
            {
              icon: <Globe className="h-6 w-6" />,
              label: "Delivery",
              desc: "Arrives at your door. Timing depends on your region. See rates below."
            }
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl bg-linear-to-br from-primary/5 to-secondary/5 border border-border/50"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping rates */}
      <section>
        <h2 className="font-display font-bold text-2xl mb-2">Shipping Rates</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Rates are standard flat-rate shipping. The &quot;additional&quot;
          price applies when you add more of the same category to one order.
        </p>

        <Accordion
          type="single"
          collapsible
          defaultValue="apparel"
          className="space-y-3"
        >
          {categories.map((cat) => (
            <AccordionItem
              key={cat.id}
              value={cat.id}
              className="rounded-2xl border border-border/50 bg-card shadow-sm overflow-hidden px-6"
            >
              <AccordionTrigger className="hover:no-underline hover:bg-transparent py-4">
                <div className="flex items-center gap-3">
                  {/* <span className="text-xl">{cat.icon}</span> */}
                  <span className="font-bold">{cat.label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                {cat.note && (
                  <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-muted/50 border border-border/50 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    {cat.note}
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left pb-3 pr-6 font-bold text-xs tracking-widest uppercase text-muted-foreground">
                          Region
                        </th>
                        <th className="text-left pb-3 pr-6 font-bold text-xs tracking-widest uppercase text-muted-foreground">
                          First Item
                        </th>
                        <th className="text-left pb-3 pr-6 font-bold text-xs tracking-widest uppercase text-muted-foreground">
                          Additional
                        </th>
                        <th className="text-left pb-3 font-bold text-xs tracking-widest uppercase text-muted-foreground">
                          Est. Delivery
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.rates.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border/30 last:border-0"
                        >
                          <td className="py-3 pr-6 font-medium">
                            {row.region}
                          </td>
                          <td className="py-3 pr-6">{row.standard}</td>
                          <td className="py-3 pr-6 text-muted-foreground">
                            {row.additional}
                          </td>
                          <td className="py-3 text-muted-foreground text-xs">
                            {row.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Return Policy */}
      <section>
        <h2 className="font-display font-bold text-2xl mb-2">Return Policy</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Because every item is made on demand, our return policy follows
          Printful&apos;s guidelines.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Eligible */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-primary/5 to-secondary/5 border border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle className="h-4 w-4" />
              </div>
              <h3 className="font-bold">We&apos;ll make it right</h3>
            </div>
            <ul className="pl-2 space-y-2 text-sm text-muted-foreground">
              {[
                "Item arrived damaged or defective",
                "Item was misprinted or has a quality issue",
                "Wrong item was sent",
                "Package was lost in transit"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not eligible */}
          <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground shrink-0">
                <XCircle className="h-4 w-4" />
              </div>
              <h3 className="font-bold">Not covered</h3>
            </div>
            <ul className="pl-2 space-y-2 text-sm text-muted-foreground">
              {[
                "Change of mind or buyer's remorse",
                "Ordered the wrong size or color",
                "Incorrect shipping address provided",
                "Unclaimed or undeliverable packages"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to claim */}
        <div className="p-6 rounded-2xl border border-border/50 bg-card shadow-sm space-y-4">
          <h3 className="font-bold text-lg">How to submit a claim</h3>
          <div className="space-y-3">
            {[
              {
                step: "01",
                text: "Contact us within 30 days of receiving your order (or within 30 days of the estimated delivery date for lost packages)."
              },
              {
                step: "02",
                text: "Include a clear photo showing the issue (misprint, damage, or incorrect item)."
              },
              {
                step: "03",
                text: "We'll review your claim with Printful and arrange a free replacement or refund if approved."
              }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="font-mono text-xs font-bold text-muted-foreground mt-0.5 shrink-0">
                  {item.step}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2 pt-2 border-t border-border/50 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            <p>
              Do not ship returns to us directly. If a return is needed,
              we&apos;ll provide the correct Printful fulfillment address.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="font-display font-bold text-2xl mb-6">
          Common Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border border-border/50 bg-card shadow-sm overflow-hidden px-6"
            >
              <AccordionTrigger className="hover:no-underline hover:bg-transparent py-4 text-left">
                <span className="font-bold pr-4">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section>
        <div className="w-full space-y-6 py-16 px-8 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <div>
            <h2 className="font-display font-bold text-3xl mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re happy to help, reach out any time!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="btn-pink px-8 py-2.5 rounded-full font-semibold text-sm">
                Contact Us
              </button>
            </Link>
            <Link href="/shop">
              <button className="btn-blue px-8 py-2.5 rounded-full font-semibold text-sm">
                Back to Shop
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

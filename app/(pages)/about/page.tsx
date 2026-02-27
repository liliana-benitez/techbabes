import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import founder from "../../../public/founder.png"
import hero from "../../../public/hero.jpg"
import Values from "@/components/values"

export default function Page() {
  const stats = [
    {
      label: "Women in Tech",
      value: "26%",
      description: "of the global tech workforce",
      url: "https://spacelift.io/blog/women-in-tech-statistics"
    },
    {
      label: "In AI/ML",
      value: "22%",
      description: "women in AI roles",
      url: "https://lemon.io/blog/women-in-tech-statistics/"
    },
    {
      label: "Startup Founders",
      value: "13%",
      description: "women-led tech startups",
      url: "https://technical.ly/diversity-equity-inclusion/female-founders-investment-trends-2024-ballard-spahr/"
    },
    {
      label: "Career Satisfaction",
      value: "78%",
      description: "of women with mentors stay in tech",
      url: "https://www.womentech.net/women-in-tech-mentorship-statistics"
    }
  ]

  return (
    <div className="flex flex-col gap-4 px-4 md:px-20 pb-12">
      {/* My Story */}
      <section className="px-4 pt-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="font-display font-bold text-3xl md:text-4xl">
              Hello!
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m Lili - a software engineer and the founder of{" "}
              <span className="font-semibold">Tech Babes</span>. Working in
              tech, I’ve watched more women step into the industry, which is
              encouraging, but the stats gently bring us back to reality:{" "}
              <span className="font-semibold">
                not enough women are joining tech
              </span>
              . That’s why I created Tech Babes. Tech Babes is my way of mixing
              code, confidence, and creativity. It’s about{" "}
              <span className="font-semibold">celebrating women in tech</span>{" "}
              who want to look cute, feel powerful, and still ship great
              software. Our merch is fun, expressive, and unapologetically
              tech-forward. Women in tech are rising, but the data shows we
              still have ground to cover. Tech Babes is about visibility,
              confidence, and reminding women in tech that they belong, without
              compromise.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
            <Image
              src={founder}
              alt="Founder of Tech Babes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*Stats*/}
      <section className="container px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg md:w-1/2">
            <Image
              src={hero}
              alt="Women in tech collaborating"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 flex flex-col md:w-1/2">
            <h2 className="font-display font-bold text-4xl my-6">Stats</h2>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-center p-6 rounded-2xl bg-linear-to-br from-primary/5 to-secondary/5 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <a target="_blank" href={stat.url}>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold">{stat.value}</span>
                      <h3 className="font-bold text-lg">{stat.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 text-center">
        <h2 className="font-display font-bold text-4xl mb-6">Our Values</h2>

        <Values />
      </section>

      {/* CTA */}
      <section className="px-4 text-center">
        <div className="w-full mx-auto space-y-8 py-16 px-8 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div>
            <h2 className="font-display font-bold text-3xl mb-4">
              Join the Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to code like a girl boss? Shop our collection and join
              thousands of women in tech rocking their style.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/shop">
              <Button
                size="lg"
                className="btn-pink"
                // className="rounded-full px-8 text-lg h-12 bg-foreground text-background hover:bg-foreground/90"
              >
                Start Shopping
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                // variant="outline"
                size="lg"
                className="btn-blue"
                // className="rounded-full px-8 text-lg h-12"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

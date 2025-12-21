import { Heart, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import founder from "../../../public/founder.png"
import hero from "../../../public/hero.jpg"

export default function Page() {
  const stats = [
    {
      label: "Women in Tech",
      value: "26%",
      description: "of the global tech workforce"
    },
    {
      label: "In AI/ML",
      value: "22%",
      description: "women leading AI positions"
    },
    {
      label: "Career Satisfaction",
      value: "78%",
      description: "higher satisfaction with mentorship"
    },
    {
      label: "Startup Founders",
      value: "17%",
      description: "women-led tech startups"
    }
  ]

  return (
    <div className="flex flex-col gap-12 px-20 py-12">
      {/* Section 1: Founder Message with Story */}
      <section className="px-4 pt-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="font-display font-bold text-3xl md:text-4xl">
              Why We Do What We Do
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey, I’m Lili - a software engineer and the founder of{" "}
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

      {/* Industry Stats Section */}
      {/* Section 2: Industry Stats */}
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
                className="flex gap-2 items-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <h3 className="font-bold text-sm mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 text-center">
        <h2 className="font-display font-bold text-4xl mb-6">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors flex flex-col items-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-3">Community First</h3>
            <p className="text-muted-foreground">
              We&apos;re building a community of women who lift each other up.
              Every purchase supports the next generation of tech babes.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-secondary/50 transition-colors flex flex-col items-center">
            <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-3">Quality Over Hype</h3>
            <p className="text-muted-foreground">
              We treat our merch like our code: clean, well-tested, and built to
              last. No compromise on quality.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors flex flex-col items-center">
            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-foreground mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-3">Inclusive Design</h3>
            <p className="text-muted-foreground">
              Every piece is designed for diverse bodies and styles. Tech
              isn&apos;t monolithic, and neither are we.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8 py-16 px-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div>
            <h2 className="font-display font-bold text-3xl mb-4">
              Join the Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to code like a girl boss? Shop our collection and join
              thousands of women in tech rocking their style.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg h-12 bg-foreground text-background hover:bg-foreground/90"
              >
                Start Shopping
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-lg h-12"
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

// <p>

// </p>

import { Heart, Users, Zap } from "lucide-react"

export default function Values() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_20px_hsla(var(--primary)/0.15)] transition-all flex flex-col items-center"> */}
      <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 flex flex-col items-center">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
          <Heart className="h-6 w-6" />
        </div>
        <h3 className="font-bold text-xl mb-3">Community First</h3>
        <p className="text-muted-foreground">
          We&apos;re building a community of women who lift each other up.
        </p>
      </div>

      {/* <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-secondary hover:bg-secondary/20 hover:shadow-[0_0_20px_hsla(var(--secondary)/0.2)] transition-all flex flex-col items-center">  */}
      <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 flex flex-col items-center">
        <div className=" h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
          <Zap className="h-6 w-6" />
        </div>
        <h3 className="font-bold text-xl mb-3">Quality Over Hype</h3>
        <p className="text-muted-foreground">
          We treat our merch like our code: clean, well-tested, and built to
          last. No compromise on quality.
        </p>
      </div>

      {/* <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-accent/80 hover:bg-accent/10 hover:shadow-[0_0_20px_hsla(var(--accent)/0.2)] transition-all flex flex-col items-center"> */}
      <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 flex flex-col items-center">
        <div className="btn-pink h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-foreground mb-6">
          <Users className="h-6 w-6 " />
        </div>
        <h3 className="font-bold text-xl mb-3">Inclusive Design</h3>
        <p className="text-muted-foreground">
          Every piece is designed for diverse bodies and styles. Tech isn&apos;t
          monolithic, and neither are we.
        </p>
      </div>
    </div>
  )
}

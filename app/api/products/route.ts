import { NextResponse } from "next/server"

const posts = [
  {
    id: 1,
    title: "Tech Babes Rubber Ducky Mug",
    description:
      "Start your day with a dose of inspiration and empowerment with our Tech Babes Mug. Crafted for the trailblazers and visionaries of the tech world, this mug is more than just a vessel for your favourite beverage – it's a symbol of strength, resilience, and progress. Made from premium ceramic material, this mug is both microwave and dishwasher safe, ensuring convenience without compromising on quality. Whether you're sipping your morning coffee or enjoying an afternoon tea break, let this mug be a reminder of the limitless potential within reach. With every sip, draw inspiration from the achievements of women in tech and empower yourself to pursue your passions fearlessly. Toast to the future, fuel your innovation, and celebrate the power of women in technology with our Tech Babes Mug because geek is chic! Material: 100% ceramic One size: 11 oz (0.33 l) Scratch-resistant finish C-shaped easy-grip handle Microwave and dishwasher safe",
    price: 15.0,
    imageUrl:
      "https://i.etsystatic.com/50720250/r/il/837ece/5850390944/il_1588xN.5850390944_f2zv.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Dino Dark Mode Mouse Pad",
    description:
      "Elevate your workspace with our Tech Babes Mousepad. More than just a desk accessory, this mousepad is designed for those who lead with passion and break barriers with every click, while inspiring the brilliance and resilience of women in the tech world.",
    price: 15.0,
    imageUrl:
      "https://i.etsystatic.com/50720250/r/il/74e193/6034896320/il_1588xN.6034896320_6k5z.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Tech Babes Sticker Sheet",
    description:
      "Empower your tech journey with our exclusive collection of Tech Babes stickers! Celebrate the brilliance, creativity, and innovation of women in the tech industry with our vibrant designs. From coding superheroes to circuit board queens, our stickers showcase the diverse talents and achievements of women in tech. Whether you're decking out your laptop, notebook, or water bottle, these stickers serve as a daily reminder of the strength and resilience of women in the tech world. Elevate your tech gear and join the movement with our Tech Babes sticker collection!",
    price: 10.0,
    imageUrl:
      "https://i.etsystatic.com/50720250/r/il/9e8458/5913162160/il_1588xN.5913162160_3cg5.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Tech Babes Sticker Sheet",
    description:
      "Empower your tech journey with our exclusive collection of Tech Babes stickers! Celebrate the brilliance, creativity, and innovation of women in the tech industry with our vibrant designs. From coding superheroes to circuit board queens, our stickers showcase the diverse talents and achievements of women in tech. Whether you're decking out your laptop, notebook, or water bottle, these stickers serve as a daily reminder of the strength and resilience of women in the tech world. Elevate your tech gear and join the movement with our Tech Babes sticker collection!",
    price: 10.0,
    imageUrl:
      "https://i.etsystatic.com/50720250/r/il/9e8458/5913162160/il_1588xN.5913162160_3cg5.jpg",
    link: "#"
  }
]

export function GET() {
  return NextResponse.json(posts)
}

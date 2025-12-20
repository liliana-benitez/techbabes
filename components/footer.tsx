import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"
// import instagram from "../public/instagram.png"
// import facebook from "../public/facebook.png"

export default function Footer() {
  return (
    // <div className="border flex flex-col gap-5 justify-center items-center py-5 mt-10">
    //   <div className="flex flex-col sm:flex-row gap-14 justify-center items-center">
    //     {/* social links */}
    //     <div className="flex">
    //       <a target="_blank" href={"https://www.facebook.com/itsyamig"}>
    //         {/* <Image src={facebook} alt="facebook logo" height={30} /> */}
    //       </a>
    //       <a target="_blank" href={"https://www.instagram.com/itsyamig"}>
    //         {/* <Image src={instagram} alt="instagram logo" height={30} /> */}
    //       </a>
    //     </div>

    //     {/* site map */}
    //     <div className="flex flex-col gap-5">
    //       <ul className="flex flex-col sm:flex-row gap-5 justify-center items-center">
    //         <li>
    //           <Link href={"/"}>Home</Link>
    //         </li>
    //         <li>
    //           <Link href={"/faq"}>FAQs</Link>
    //         </li>
    //         <li>
    //           <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
    //         </li>
    //       </ul>
    //       <ul className="flex flex-col sm:flex-row gap-5 justify-center items-center">
    //         <li>
    //           <Link href={"/how-we-do-it"}>Services</Link>
    //         </li>
    //         <li>
    //           <Link href={"/contact-us"}>Contact Us</Link>
    //         </li>
    //         <li>
    //           <Link href={"/privacy-policy"}>Privacy Policy</Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <Link href={"/"}>
    //       <Image src={logo} alt="itsYamiG logo" height={50} width={50} />
    //     </Link>
    //   </div>

    //   <div className="font-semibold">​© 2025 by Tech Babes</div>
    // </div>
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Tech Babes</h3>
            <p className="text-muted-foreground text-sm">
              Empowering women in tech with style and code.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shop">Apparel</Link>
              </li>
              <li>
                <Link href="/shop">Accessories</Link>
              </li>
              <li>
                <Link href="/shop">New Arrivals</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-background border border-input px-3 py-2 rounded-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {/* <Button size="sm">Join</Button> */}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tech Babes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"
// import instagram from "../public/instagram.png"
// import facebook from "../public/facebook.png"

export default function Footer() {
  return (
    <div className="border flex flex-col gap-5 justify-center items-center py-5 mt-10">
      <div className="flex flex-col sm:flex-row gap-14 justify-center items-center">
        {/* social links */}
        <div className="flex">
          <a target="_blank" href={"https://www.facebook.com/itsyamig"}>
            {/* <Image src={facebook} alt="facebook logo" height={30} /> */}
          </a>
          <a target="_blank" href={"https://www.instagram.com/itsyamig"}>
            {/* <Image src={instagram} alt="instagram logo" height={30} /> */}
          </a>
        </div>

        {/* site map */}
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/faq"}>FAQs</Link>
            </li>
            <li>
              <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            </li>
          </ul>
          <ul className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <li>
              <Link href={"/how-we-do-it"}>Services</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <Link href={"/"}>
          <Image src={logo} alt="itsYamiG logo" height={50} width={50} />
        </Link>
      </div>

      <div className="font-semibold">​© 2025 by Tech Babes</div>
    </div>
  )
}

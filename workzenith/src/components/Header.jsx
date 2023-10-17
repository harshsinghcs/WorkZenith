import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="w-full flex px-3 md:px-[30px] justify-between py-5 items-center">
      <div>
        <Link href={"/"} className="text-2xl font-[600]">
          <span className="text-[#ff8913]">Work</span>Zenith
        </Link>
      </div>
      <div className="space-x-4 md:block hidden">
        <Link href={"/"} className="text-lg hover:text-[#ff8913]">
          Home
        </Link>
        <Link
          href={"https://harshsinghcs.github.io/WorkZenith/"}
          className="text-lg hover:text-[#ff8913] transition-all duration-700"
        >
          Dashboard
        </Link>
        <Link href={"/about-us"} className="text-lg hover:text-[#ff8913]">
          About Us
        </Link>
        <Link href={"/contact"} className="text-lg hover:text-[#ff8913]">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
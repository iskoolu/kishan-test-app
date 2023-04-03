import BurgerMenu from "../../styled-component/Burgermenu"
import Image from "next/image"
import React from "react"
import logo from "../../public/logo.png"
import { useRouter } from "next/router"

function Navbar() {
      const router = useRouter()

      return (
            <header className="fixed w-[100%] top-0 z-50 bg-lightblack flex items-center justify-between h-50 pr-3 pl-1 py-1 lg:px-7 lg:py-1">
                  <div
                        className="flex items-center cursor-pointer"
                        onClick={() => router.push("/")}
                  >
                        <Image src={logo} width={40} height={40} alt={"logo"} />
                        <p className="text-textwhite text-base relative left-4">
                              {router.pathname === "/Menu" ? "Menu" : "We're on a mission"}
                        </p>
                  </div>
                  <div className="hidden lg:block ">
                        <BurgerMenu screenType="desktop" />
                  </div>
                  <div className="lg:hidden block mr-[8px]">
                        <BurgerMenu screenType="mobile" />
                  </div>
            </header>
      )
}

export default Navbar

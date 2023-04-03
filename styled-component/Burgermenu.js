import React, { useState } from "react"
import { useRouter } from "next/router"
import { useRef } from "react"
import useOutsideClick from "../src/customhook/useOutsideClick"
import DropDownLink from "./DropDownlink"
import { menuLinks } from "../staticdata/appContents"

function BurgerMenu({ screenType }) {
      const [clicked, setClicked] = useState(false)
      const [dropdownOpen, setDropDown] = useState(false)
      const ref = useRef(null)
      const router = useRouter()
      const handleOnClick = e => {
            if (screenType === "desktop") {
                  setDropDown(prev => !prev)
            } else {
                  if (clicked) {
                        router.back()
                  } else {
                        router.push("/Menu")
                  }
            }
            setClicked(prev => !prev)
      }

      const handleClickOutside = () => {
            setClicked(false)
            setDropDown(false)
      }

      useOutsideClick(ref, handleClickOutside)

      return (
            <div className="relative inline-block text-left" ref={ref}>
                  <div
                        className="inline-block  cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={handleOnClick}
                  >
                        <div
                              className={
                                    clicked
                                          ? "w-[18px] h-[2px] bg-textwhite duration-500 transform rotate-45 translate-y-1.5"
                                          : "w-[18px] h-[2px] bg-textwhite duration-500 "
                              }
                        />
                        <div
                              className={
                                    clicked
                                          ? "w-[18px] h-[2px] bg-textwhite duration-500 mt-1 transform -rotate-45 translate-x-0 translate-y-0"
                                          : "w-[18px] h-[2px] bg-textwhite duration-500 mt-1 "
                              }
                        />
                  </div>
                  <DropDownLink
                        open={dropdownOpen}
                        links={menuLinks || []}
                        onClose={handleClickOutside}
                  />
            </div>
      )
}

export default BurgerMenu

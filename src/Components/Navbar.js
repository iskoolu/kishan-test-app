import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Image from "next/image"
import React from "react"
import logo from "../../public/logo.png"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/router"
import Link from "next/link";

function Navbar() {
      const router = useRouter()
      const [dropdownOpen, setDropdownOpen] = useState(false);


      const handleDropdownOpen = () => {
            setDropdownOpen(true);
      };
      const handleClose = () => {
            setDropdownOpen(false);
      };


      const dropdownRef = useRef(null);

      const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                  setDropdownOpen(false);
            }
      };


      useEffect(() => {
            document.addEventListener('click', handleOutsideClick, true);
            return () => {
                  document.removeEventListener('click', handleOutsideClick, true);
            };
      }, []);



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

                  <div className="relative" ref={dropdownRef}>
                        <MenuOpenIcon
                              className="flex items-center text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 mt-2 " sx={{ color: 'white' }}
                              onClick={handleDropdownOpen}
                        >
                              <span>Dropdown</span>
                              <svg
                                    className="w-8 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                              >
                                    <path
                                          d="M19 9l-7 7-7-7"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                    />
                              </svg>
                        </MenuOpenIcon>
                        {dropdownOpen && (
                              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 bg-textwhite">
                                    <Link href="/" legacyBehavior >
                                          <a onClick={handleClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-lightblack">Services</a>
                                    </Link>
                                    <Link href="/Environment" legacyBehavior>
                                          <a onClick={handleClose} className="block px-4 py-2 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-100 hover:text-gray-600 text-lightblack">Environment Statement</a>
                                    </Link>
                                    <Link href="/Faq" legacyBehavior>
                                          <a onClick={handleClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-lightblack">FAQ</a>
                                    </Link>
                                    <Link href="/Nft" legacyBehavior>
                                          <a onClick={handleClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-lightblack">Nft</a>
                                    </Link>
                                    <Link href="/Projects" legacyBehavior>
                                          <a onClick={handleClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-lightblack">Projects</a>
                                    </Link>
                              </div>
                        )
                        }
                  </div>

            </header >
      )
}

export default Navbar

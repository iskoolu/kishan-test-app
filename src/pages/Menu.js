import { menuLinks } from "../../staticdata/appContents"
import Link from "next/link"
import React from "react"

function Menu() {
      return (
            <div className="flex items-center h-[70vh]">
                  <div className="py-1">
                        {menuLinks?.map((link, id) => (
                              <Link
                                    key={id}
                                    href={link.path}
                                    role="menuitem"
                                    className="block px-4 py-2 uppercase text-sm "
                              >
                                    {link.label}
                              </Link>
                        ))}

                  </div>
            </div>
      )
}

export default Menu

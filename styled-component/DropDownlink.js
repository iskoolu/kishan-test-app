import Link from "next/link"
import React from "react"

function DropDownLink({ open, links, onClose }) {
      return (
            <div>
                  <div
                        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-textwhite ring-1 ring-black ring-opacity-5 dropdown ${open ? null : "hidden"
                              }`}
                        aria-labelledby="options-menu"
                        role="menu"
                  >
                        <div className="py-1" role="none">
                              {links?.map((link, id) => (
                                    <Link
                                          key={id}
                                          href={link.path}
                                          onClick={() => onClose(false)}
                                          className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-footerBannerEnd hover:text-gray-900"
                                          role="menuitem"
                                    >
                                          {link.label}
                                    </Link>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default DropDownLink

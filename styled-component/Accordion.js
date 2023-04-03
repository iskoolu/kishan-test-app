import React from "react"

function Accordion({ questionId, title, expanded, content, handleChange }) {
      return (
            <div className="relative ">
                  <div>
                        <input
                              type="checkbox"
                              value={questionId}
                              checked={expanded === questionId}
                              className="absolute peer opacity-0"
                              id={`input${questionId}`}
                              onChange={() => {
                                    handleChange(questionId)
                              }}
                        />
                        <div className="p-[20px] lg:h-[50px] flex items-center peer-checked:bg-gradient-to-r from-footerBannerStart to-footerBannerEnd peer-checked:text-[#000]">
                              <label
                                    htmlFor={`input${questionId}`}
                                    className=" uppercase flex items-center text-[20px] lg:text-[28px] cursor-pointer  w-[80%] "
                              >
                                    {title}
                              </label>
                              <div className="w-[20%] peer-checked:text-[#000] flex items-center justify-end">
                                    <p className="text-2xl ">{expanded === questionId ? "-" : "+"}</p>
                              </div>
                        </div>
                        <div className="cursor-default  max-h-0 overflow-hidden peer-checked:max-h-full">
                              <p className="p-[20px] text-[16px] lg:text-lg opacity-80">
                                    {content}
                              </p>
                        </div>
                  </div>
            </div>
      )
}

export default Accordion

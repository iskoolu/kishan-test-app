import { faqContent } from "../../staticdata/appContents"
import Accordion from "../../styled-component/Accordion"
import React, { useState } from "react"

function Faq() {
      const [expanded, setExpanded] = useState("1")
      const handleChange = val => {
            if (val !== expanded) {
                  setExpanded(val)
            } else {
                  setExpanded("0")
            }
      }
      return (
            <div>
                  <h1 className="text-[45px] lg:text-9xl mb-[3rem] font-bold uppercase">
                        Frequently Asked
                  </h1>
                  {faqContent.map((faqQues, id) => (
                        <div className="mt-6" key={id}>
                              <Accordion
                                    questionId={faqQues.questionId}
                                    title={faqQues.question}
                                    content={faqQues.answer}
                                    expanded={expanded}
                                    handleChange={handleChange}
                              />
                        </div>
                  ))}
            </div>
      )
}

export default Faq

import { appText } from "../../staticdata/appContents";
import Image from "next/image";
import React from "react";
import Chapter from "../Components/Chapter";
import nodeArmy from "../../public/nodearmy.png";
function Environment() {
      return (
            <div className="w-full">
                  <h1 className="text-[45px] lg:text-9xl font-bold uppercase">
                        Environment statement
                  </h1>
                  <div className="lg:flex w-full lg:mb-4 py-5 lg:py-10 lg:gap-7 h-auto">
                        <div className="w-full lg:w-1/3 text-textwhite">
                              <Chapter
                                    name={"Proof Of Stake"}
                                    title={appText.pStake.title}
                                    content={appText.pStake.content}
                                    icon={appText.pStake.icon}
                              />
                        </div>
                        <div className="w-full  lg:w-1/3 mt-12 lg:mt-0 text-textwhite">
                              <Chapter
                                    name={"Cloud Computing"}
                                    title={appText.cComputing.title}
                                    content={appText.cComputing.content}
                                    icon={appText.cComputing.icon}
                              />
                        </div>
                        <div className="w-full hidden lg:block lg:w-1/3 text-textwhite" />
                  </div>
                  <div className="lg:flex mb-4 w-full py-5 lg:py-10 gap-7 h-auto">
                        <div className="hidden  lg:block lg:w-1/3 text-textwhite" />
                        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 text-textwhite">
                              <Image src={nodeArmy} className="w-full h-auto" alt="coordinates" />
                        </div>
                        <div className="w-full  lg:w-1/3 mt-12 lg:mt-0 text-textwhite">
                              <Chapter
                                    name={"Nodes as a service"}
                                    title={appText.nArmy.title}
                                    content={appText.nArmy.content}
                                    icon={appText.nArmy.icon}
                              />
                        </div>
                  </div>
            </div>
      );
}

export default Environment;

import React from "react";
import Chapter from "./Chapter";
import Image from "next/image";
import coordinates from "../../public/coordinates.png";
import blockchain from "../../public/blockchain.png";
import { appText } from "../../staticdata/appContents";

function Services() {
      return (
            <div>
                  <h1 className="text-[45px] lg:text-9xl font-bold">SERVICES</h1>
                  <div className="lg:flex lg:mb-4 py-5 lg:py-10 lg:gap-7 h-auto">
                        <div className="w-full lg:w-1/3 text-textwhite">
                              <Chapter
                                    name={"Co-Nodes"}
                                    title={appText.coNodes.title}
                                    content={appText.coNodes.content}
                                    icon={appText.coNodes.icon}
                                    trademark={appText.coNodes.trademark}
                              />
                        </div>
                        <div className="w-full lg:w-1/3 mt-12 lg:mt-0 text-textwhite">
                              <Chapter
                                    name={"Managed nodes"}
                                    title={appText.managedNodes.title}
                                    content={appText.managedNodes.content}
                                    icon={appText.managedNodes.icon}
                              />
                        </div>
                        <div className="w-full lg:w-1/3 text-textwhite">
                              <Image
                                    src={coordinates}
                                    className="w-[100%] h-auto mt-10 lg:mt-0"
                                    alt="coordinates"
                              />
                              <div className="mt-6">
                                    <Chapter
                                          name={"Nodes as a service"}
                                          title={appText.nodeAsService.title}
                                          content={appText.nodeAsService.content}
                                          icon={appText.nodeAsService.icon}
                                    />
                              </div>
                        </div>
                  </div>
                  <div className="w-[100%] lg:flex mb-4 py-5 lg:py-10 gap-7 h-auto ">
                        <div className="w-full lg:w-1/3 text-textwhite">
                              <Chapter
                                    name={"Rewards"}
                                    title={appText.rewards.title}
                                    content={appText.rewards.content}
                                    icon={appText.rewards.icon}
                              />
                        </div>
                        <div className="w-full lg:w-1/3  mt-12 lg:mt-0 text-textwhite">
                              <Chapter
                                    name={"Node Build Templates"}
                                    title={appText.buildTemplate.title}
                                    content={appText.buildTemplate.content}
                                    icon={appText.buildTemplate.icon}
                              />
                        </div>
                        <div className="hidden lg:w-1/3 text-textwhite flex items-end"></div>
                  </div>
                  <div className="lg:flex mb-4 py-10 gap-7 h-auto">
                        <div className="hidden lg:block lg:w-1/3 text-textwhite "></div>
                        <div className="w-full lg:w-1/3 text-textwhite">
                              <Image src={blockchain} className="w-full h-auto" alt="coordinates" />
                        </div>
                        <div className="w-full lg:w-1/3  mt-12 lg:mt-0 text-textwhite ">
                              <Chapter
                                    name={"Blockchain scalability"}
                                    title={appText.bScalability.title}
                                    content={appText.bScalability.content}
                                    icon={appText.bScalability.icon}
                              />
                        </div>
                  </div>
            </div>
      );
}

export default Services;

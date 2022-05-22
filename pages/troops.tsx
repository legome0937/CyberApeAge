import React, { useContext, useEffect, useState } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import GlobalHeader1 from "../components/GlobalHeader1";
import GlobalFooter1 from "../components/GlobalFooter1";
import HeadMetadata from "../components/HeadMetadata";
import { ShopContainer, ShopItemsWrapper, WelcomeHeader1, WelcomeHeader2 } from "../styles/Troops";
import PageTopSpacer from "../components/PageTopSpacer";
import SectionHeader from "../components/SectionHeader";
import HorizontalSlider from "../components/HorizontalSlider";
import BloomingContainer from "../components/BloomingContainer";
import ResumeItem from "../components/ResumeItem";
import ApeIcon from "../components/ResumeItem/ApeIcon";
import KeyIcon from "../components/ResumeItem/KeyIcon";
import SignatureButton from "../components/SignatureButton";
import Stepbar from "../components/progressbar/stepbar";
import Image from 'next/image'
const Home: NextPage<any> = () => {



  const [isAboveMiddle, setIsAboveMiddle] = useState<boolean>(false);
  return (
    <>
      <HeadMetadata />
      <GlobalHeader1 />

      <PageTopSpacer />
      <ShopContainer>

        <WelcomeHeader1>
          <div className="divw">
            <div className="flexdiv">
              <div className="div-item">
                <p>current prize pool</p>
                <h1>134.5 SOL</h1>
              </div>
              <div className="div-item">
                <p>next royalties airdrop</p>
                <h1>05 february</h1>
              </div>
              <div className="div-item">
                <p>ending of p2e event</p>
                <h1>22 february</h1>
              </div>
            </div>
            <div className="flexdiv">

              <div className="flex1">
                <p>how can I win $ape</p>
              </div>
              <SignatureButton onClick={() => console.log('gg')} isContrast accent="#5865F2">
                claim all my $APE (240)
              </SignatureButton>
            </div>
          </div>


        </WelcomeHeader1>

        <ShopContainer>
          <WelcomeHeader2>
            <div className="stepbar">
              <Stepbar />
            </div>

          </WelcomeHeader2>

        </ShopContainer>
        <ShopContainer>
          <div className="week">
            <h1>Week 4</h1>
          </div>
        </ShopContainer>


        <ShopItemsWrapper>
          <WelcomeHeader2>
            <div className="midle">

              <BloomingContainer
                accent="#29458D"
                customStyles={{
                  height: "180px",
                  width: "800px",
                  padding: "",
                  borderBottomLeftRadius: 14,
                  borderTopRightRadius: 14,
                }}
              ><div className="flexbox">
                  <div>    <Image src="/Vector.png" width="130" height="160" /></div>
                  <div> <h1>LOOK FOR YOURSELF </h1>
                    <p>Developing 52 unique pixel art traits, start of development of Cyber Ape Age experienc</p>
                  </div>

                </div>

              </BloomingContainer>
              <BloomingContainer
                accent="#789764"
                customStyles={{
                  height: "180px",
                  width: "800px",
                  padding: "2.5rem",
                  marginLeft: "1rem",
                  borderBottomLeftRadius: 12,
                }}
              >
                <div className="flexbox1">
                  <div>  <Image src="/beaker.png" width="50" height="140" /></div>

                  <div> <h1>LOOK FOR YOURSELF </h1>
                    <p>Developing 52 unique pixel art traits, start of development of Cyber Ape Age experienc</p>
                  </div>
                </div>
              </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "50%",
                  padding: "2rem 2rem 0 2rem",
                  border: "none",
                }}
              > <h1>MAKING OF: CYBER APE AGE </h1>
                <p>Developing 52 unique pixel art traits, start of development of Cyber Ape Age experienc</p>
              </BloomingContainer></div>


          </WelcomeHeader2>

          <ShopContainer>
            <WelcomeHeader2>
              <div className="midle">
                <BloomingContainer
                  accent="#000000"
                  customStyles={{
                    width: "70%",
                    padding: "2rem 2rem 0 2rem",
                    border: "none",
                  }}
                >
                  <p>MAKING OF: CYBER APE AGE</p>
                  <p>Developing 52 unique pixel art traits, start of development of Cyber Ape Age experienc</p>
                </BloomingContainer>
                <BloomingContainer
                  accent="#000000"
                  customStyles={{
                    width: "100%",
                    padding: "2rem 2rem 0 2rem",
                    border: "none",
                  }}
                >
                  <p>MAKING OF: CYBER APE AGE</p>
                  <p>Developing 52 unique pixel art traits, start of development of Cyber Ape Age experienc</p>
                </BloomingContainer>
              </div>
            </WelcomeHeader2>
          </ShopContainer>
        </ShopItemsWrapper>

        <WelcomeHeader2>


          <div className="flexitems" >
            <div className="flexitems11" >

              <div>

                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "100%",
                    marginRight: "50px",
                    padding: "1rem 1rem 0 1rem",
                    border: "none",
                  }}
                ><div className="flexitem4">
                    <div>
                      <h3>holders spread</h3>
                      <div>
                        <span>+1,500</span></div>

                      <h1>1,556</h1>
                    </div>
                    <div>
                      <Image src="/net1.png" width="100" height="50" />
                    </div>
                  </div>

                </BloomingContainer>
              </div>

              <div>

                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "100%",
                    marginRight: "50px",
                    padding: "1rem 1rem 0 1rem",
                    border: "none",
                  }}
                ><div className="flexitem4">
                    <div>
                      <h3>holders spread</h3>
                      <div>
                        <span>+1,500</span></div>

                      <h1>1,556</h1>
                    </div>
                    <div>
                      <Image src="/net2.png" width="100" height="50" />
                    </div>
                  </div>

                </BloomingContainer>
              </div>
              <div>

                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "100%",
                    marginRight: "50px",
                    padding: "1rem 1rem 0 1rem",
                    border: "none",
                  }}
                ><div className="flexitem4">
                    <div>
                      <h3>holders spread</h3>
                      <div>
                        <span>+1,500</span></div>

                      <h1>1,556</h1>
                    </div>
                    <div>
                      <Image src="/net3.png" width="100" height="50" />
                    </div>
                  </div>

                </BloomingContainer>
              </div>
            </div>
            <div >
              <div className="apsec">
                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "170%",

                    height: "10%",
                    border: "white",
                  }}
                > <div className="flexitem1">

                    <div className="flexitems2">
                      <h2>1st</h2>
                      <Image src="/ape2.png" width="70" height="65%" />
                      <p>somthing</p>
                    </div>
                    <div className="flexitems2">


                      <p>somthing</p>
                    </div>
                    <div className="flexitems2">


                      <p>somthing</p>
                    </div>
                  </div>

                </BloomingContainer>

                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "170%",
                    marginTop: "15px",
                    height: "10%",
                    border: "white",
                  }}
                > <div className="flexitem1">

                    <div className="flexitems2">
                      <h2>1st</h2>
                      <Image src="/ape2.png" width="70" height="65%" />
                      <p>somthing</p>
                    </div>
                    <div className="flexitems2">


                      <p>somthing</p>
                    </div>
                    <div className="flexitems2">


                      <p>somthing</p>
                    </div>
                  </div>

                </BloomingContainer>
                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "170%",
                    marginTop: "15px",
                    height: "10%",
                    border: "white",
                  }}
                > <div className="flexitem1">

                    <div className="flexitems2">
                      <h2>1st</h2>
                      <Image src="/ape2.png" width="70" height="65%" />
                      <p>somthing</p>
                    </div>
                    <div className="flexitems2">


                      <p>somthing</p>
                    </div>
                    <div className="flexitems2">


                      <p>somthing</p>
                    </div>
                  </div>

                </BloomingContainer>
              </div>


            </div>

          </div>


        </WelcomeHeader2>


        <HorizontalSlider hasControls>
          <ShopItemsWrapper>
            <div className="header-sec">
              <SectionHeader
                title="LOOK FOR YOURSELF"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
              />
            </div>
            <div className="griditems">

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}

              ><div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@joaomendoncaaa</p>

                  </div>
                  <div className="flex1">

                  </div>
                </div>

                <p><span className="color">@CyberApeAge</span> What is this? Did I just get my second batch of SOL in less than a month?
                  Almost 5 SOL already... Keep sleeping on this project guys! The more you sleep the bigger share for me :)</p>
                <p><span className="color">#OOGAOOGA #CYBERAPEAGE #earnings</span></p>   </BloomingContainer>
            </div>

          </ShopItemsWrapper>

        </HorizontalSlider>
      </ShopContainer>

      < GlobalFooter1 />
    </>
  );
};


export default Home;
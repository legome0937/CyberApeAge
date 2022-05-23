import React, { useContext, useEffect, useState } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import GlobalHeader1 from "../components/GlobalHeader1";
import GlobalFooter1 from "../components/GlobalFooter1";
import HeadMetadata from "../components/HeadMetadata";
import { ShopContainer, ShopItemsWrapper, WelcomeHeader1, WelcomeHeader2 } from "../styles/Troops";
import PageTopSpacer from "../components/PageTopSpacer";
import DiscordIcon from "../components/DiscordIcon";
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



        <ShopContainer>
          <WelcomeHeader2>
            <div className="stepbar">
              <Stepbar />

            </div>


          </WelcomeHeader2>

        </ShopContainer>
        <ShopContainer>
          <div className="week">
            <h2>Week 4</h2>
            <p>CLICK FOR MORE INFO</p>
          </div>
        </ShopContainer>


        <ShopItemsWrapper>
          <WelcomeHeader2>
            <div className="midle">
              <div className="cut-div purple">
                <Image src="/Vector.png" width="250" height="130" />
                <div className="content-cut">
                  <h2>CYBER LOCKDOWN </h2>
                  <p>Rogue Cyber Apes can be locked down in the Cyber Ape Age for [REDACTED].</p>
                  <p>Initiate Cyber Lockdown...</p>
                </div>
              </div>
              <div className="cut-div green">
                <Image src="/beaker.png" width="50" height="140" />
                <div className="content-cut">
                  <h2>ASTRAL BREAKERS</h2>
                  <p>Coming soon..</p>
                </div>
              </div>

              <div className="cut-div black">
                <div className="slider-cut">
                  <div className="dots-slider">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>

                  <div className="arrow-slider">
                    <p>  &lt; &gt;</p>
                  </div>
                </div>
                <div className="content-cut">
                  <p>FEATURED ANNOUNCMENT</p>
                  <h2>DAO VOTE ON PRIZE POOL</h2>
                  <p>A vote as taken place on the DAO to find the next move on the...</p>
                </div>
              </div>


            </div>


          </WelcomeHeader2>


          <div className="event-sec">
            <BloomingContainer
              accent="#000000"
              customStyles={{
                width: "70%",
                padding: "2rem 2rem 0 0",
                border: "none",
              }}
            >
              <h2>GENERAL STARTS</h2>
              <p>last updated 24 january 12:00:00</p>
            </BloomingContainer>
            <BloomingContainer
              accent="#000000"
              customStyles={{
                width: "100%",
                padding: "2rem 2rem 0 0",
                border: "none",
              }}
            >
              <h2>LEADERBOARD FROM P2E EVENT</h2>
              <p>last updated 24 january 12:00:00</p>
            </BloomingContainer>
          </div>

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
                >
                  <div className="flexitem4">
                    <div className="info-spread">
                      <h3>holders spread</h3>
                      <div>
                        <Image src="/Vector1.png" width="10" height="10" /><span> +3.68%</span></div>

                      <h1>1,468</h1>
                    </div>
                    <div className="info-net">
                      <div>
                        <Image src="/net1.png" width="100" height="50" />
                      </div>

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
                >
                  <div className="flexitem4">
                    <div className="info-spread">
                      <h3>holders spread</h3>
                      <div>
                        <Image src="/Vector2.png" width="10" height="10" /><span> +1,500</span></div>

                      <h1>423</h1>
                    </div>
                    <div className="info-net">
                      <div>
                        <Image src="/net2.png" width="100" height="50" />
                      </div>

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
                >
                  <div className="flexitem4">
                    <div className="info-spread">
                      <h3>holders spread</h3>
                      <div>
                        <Image src="/Vector1.png" width="10" height="10" /><span> +1,500</span></div>

                      <h1>1.10</h1>
                    </div>
                    <div className="info-net">
                      <div>
                        <Image src="/net3.png" width="100" height="50" />
                      </div>

                    </div>
                  </div>

                </BloomingContainer>
              </div>


              <div className="discord-sec">

                <h2>WANT MORE STARTS?</h2>
                <div className="dis-content">
                  <p> check our discord and leave us feedback on</p>
                  <p>stats you’d like to see displayed in troop’s hub</p>
                </div>
                <SignatureButton onClick={() => { window.location.href = "https://discord.gg/cyberapeage"; }} accent="#5865F2">

                  <DiscordIcon fill="rgba(255, 255, 255, 0.35)" />
                  discord server
                </SignatureButton>
              </div>


            </div>

            <div >
              <div className="apsec">
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>1</h2>
                    <h2 className="num-gray">st</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>2</h2>
                    <h2 className="num-gray">nd</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>3</h2>
                    <h2 className="num-gray">rd</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>4</h2>
                    <h2 className="num-gray">th</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>5</h2>
                    <h2 className="num-gray">th</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>6</h2>
                    <h2 className="num-gray">th</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>7</h2>
                    <h2 className="num-gray">th</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>8</h2>
                    <h2 className="num-gray">th</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>9</h2>
                    <h2 className="num-gray">th</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}
                {/* list item start */}
                <div className="flexitem1">

                  <div className="flexitems2">
                    <h2>10</h2>
                    <h2 className="num-gray">th</h2>
                    <div className="img-sec">
                      <Image src="/ape2.png" width="80" height="90" />
                    </div>

                    <span>
                      <p className="white-badge">SHAKRIO</p>
                      <p className="blue-badge">@LOREMSUM</p>
                    </span>
                  </div>
                  <div className="flexitems2">
                    <p>1m22s</p>
                  </div>
                  <div className="flexitems2">
                    <p>+2 SOL</p>
                  </div>
                </div>
                {/* list item end */}

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
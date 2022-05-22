import { NextPage } from "next/types";
import { PAGE_MAX_WIDTH } from "../../constants";
import BloomingContainer from "../BloomingContainer";
import CyberApeRenderer from "../CyberApeRenderer";
import DiscordIcon from "../DiscordIcon";
import TwitterIcon from "../TwitterIcon";
import HubComingSoon from "../GlobalHeader/HubComingSoon";
import GlobalFAQ from "../GlobalFAQ/GlobalFAQ";
import { useContext } from "react";
import MobileMenuContext from "../../contexts/MobileMenu";
import SuperModalContext from "../../contexts/SuperModal";
import CyberApeSearch from "../CyberApeSearch";
import License from  "../GlobalFAQ/License";
import Link from "next/link";
import {ComingSoonTitle,
  CyberApeRendererWrapper,
  Discord,
  GlobalFooterContainer,
  LinksColumn,
  LinksRowContainer,
  SocialsRow,
  Twitter,
} from "./styles";

const GlobalFooter: NextPage = () => {
  const { closeMobileMenu } = useContext(MobileMenuContext);

  const { open } = useContext(SuperModalContext);
  const { openMobileMenu } = useContext(MobileMenuContext);
  function openHub(): void {
    open("troop's hub", <HubComingSoon />);
  }
  function openShop(): void {
    open("troop's shop", <ComingSoonTitle>Coming Soon</ComingSoonTitle>);
  }
  function globalfaq(): void {
    open("troop's explorer", <GlobalFAQ />);
  }
  function openExplorer(): void {
    open("troop's explorer", <CyberApeSearch />);
  }
  function licence(): void {
    open("troop's explorer", <License />);
  }
  return (
    <GlobalFooterContainer>
      <BloomingContainer
        accent="#444"
        customStyles={{
          margin: "5rem auto",
          width: "100%",
          maxWidth: PAGE_MAX_WIDTH,
          position: "relative",
          zIndex: 1,
          padding: "3rem",
          border: "none",
        }}
      >
        <LinksRowContainer>
          <LinksColumn>
            <h1>TRAVEL AROUND</h1>
            <a onClick={openHub}>TROOP&apos;S HUB</a>
           
            <Link href={"/shop"}>
            <a >SHOP</a>
              </Link>
              <Link href={"/GlobalFAQ1"}>FAQ</Link>
            <a onClick={openExplorer}>EXPLORER</a>
          </LinksColumn>
          <LinksColumn>
            <h1>DOCUMENTATION</h1>
            <a href="#">WHITEPAPER</a>
            <Link href={"/License"}><a >LICENSE OF AGREEMENT</a></Link>
          </LinksColumn>
          <LinksColumn>
            <h1>SOCIALS</h1>
            <SocialsRow>
              <Twitter href="https://twitter.com/CyberApeAge" target="_blank" rel="noreferrer">
                <TwitterIcon />
                CYBERAPEAGE
              </Twitter>

              <Discord href="https://discord.gg/cyberapeage" target="_blank" rel="noreferrer">
                <DiscordIcon />
                discord
              </Discord>
            </SocialsRow>
          </LinksColumn>
        </LinksRowContainer>

        <CyberApeRendererWrapper>
          <CyberApeRenderer
            size="325px"
            traits={{
              ape: "Black",
              head: "Bunny",
              eyes: "Angry Visor",
              ears: "Neon Earring",
              mouth: "Green NT Mask",
            }}
          />
        </CyberApeRendererWrapper>
      </BloomingContainer>
    </GlobalFooterContainer>
  );
};

export default GlobalFooter;

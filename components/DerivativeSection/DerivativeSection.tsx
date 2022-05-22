import { NextComponentType } from "next";
import { useContext, useEffect, useState } from "react";
import CyberApeRenderer from "../CyberApeRenderer";
import * as Backgrounds from "./backgrounds";
import {
  DerivativeSectionApeColumn,
  DerivativeSectionButtonsWrapper,
  DerivativeSectionContainer,
  DerivativeSectionContent,
  DerivativeSectionTextColumn,
  DerivativeSectionTextWrapper,
} from "./styles";
import DerivativeSectionContext from "../../contexts/DerivativeSection";
import SignatureButton from "../SignatureButton";
import RerollIcon from "./RerollIcon";
import RefreshButton from "./RefreshButton";

const DerivativeSection: NextComponentType = () => {
  const { currentApeData, rerollCurrentApe } = useContext(DerivativeSectionContext);
  const [rerollIconKey, setRerollIconKey] = useState<number>(0);

  function viewApeOnMagicEden() {
    window.open(`https://magiceden.io/item-details/${currentApeData.token}`, "_blank");
  }

  useEffect(() => setRerollIconKey(Math.floor(Math.random() * 10)), [currentApeData]);

  return (
    <DerivativeSectionContainer>
      {currentApeData.traits.background === "Binary" && <Backgrounds.Binary />}
      {currentApeData.traits.background === "Blue Plain" && <Backgrounds.Blue />}
      {currentApeData.traits.background === "Blue Gradient" && <Backgrounds.BlueGradient />}
      {currentApeData.traits.background === "Brown Gradient" && <Backgrounds.BrownGradient />}
      {currentApeData.traits.background === "Purple Gradient" && <Backgrounds.PurpleGradient />}
      {currentApeData.traits.background === "Red Gradient" && <Backgrounds.RedGradient />}
      {currentApeData.traits.background === "City" && <Backgrounds.City />}
      {currentApeData.traits.background === "Cream Plain" && <Backgrounds.Cream />}
      {currentApeData.traits.background === "Cyber Age" && <Backgrounds.CyberAge />}
      {currentApeData.traits.background === "Psychedelic" && <Backgrounds.Psychedelic />}
      {currentApeData.traits.background === "Violet Plain" && <Backgrounds.Violet />}
      <DerivativeSectionContent>
        <DerivativeSectionTextColumn currentBackground={currentApeData.traits.background}>
          <DerivativeSectionTextWrapper>
            <h1>SOLANA&apos;S CYBER APES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
              luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim
              praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
            </p>
          </DerivativeSectionTextWrapper>
          <DerivativeSectionButtonsWrapper>
            <SignatureButton onClick={viewApeOnMagicEden} accent="#111111">
              view on magiceden
            </SignatureButton>
            <RefreshButton onClick={rerollCurrentApe} accent="#111111">
              <RerollIcon key={rerollIconKey} />
            </RefreshButton>
          </DerivativeSectionButtonsWrapper>
        </DerivativeSectionTextColumn>
        <DerivativeSectionApeColumn>
          <CyberApeRenderer
            size="500px"
            traits={{
              ape: currentApeData.traits.ape,
              eyes: currentApeData.traits.eyes,
              head: currentApeData.traits.head,
              ears: currentApeData.traits.ears,
              mouth: currentApeData.traits.mouth,
            }}
          />
        </DerivativeSectionApeColumn>
      </DerivativeSectionContent>
    </DerivativeSectionContainer>
  );
};

export default DerivativeSection;

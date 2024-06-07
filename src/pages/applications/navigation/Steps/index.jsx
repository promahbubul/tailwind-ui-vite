import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Bullets from "./Bullets";
import BulletsAndText from "./BulletsAndText";
import Circles from "./Circles";
import CirclesWithText from "./CirclesWithText";
import Panels from "./Panels";
import PanelsWithBorder from "./PanelsWithBorder";
import ProgressBar from "./ProgressBar";
import Simple from "./Simple";

const Steps = () => {
  return <ComponentPageContainer pageTitle={"Progress Bars"} breadcrumb={"Application UI / Navigation"} >
    <Simple />
    <Panels />
    <Bullets />
    <PanelsWithBorder />
    <Circles />
    <BulletsAndText />
    <CirclesWithText />
    <ProgressBar />
  </ComponentPageContainer>
};

export default Steps;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ButtonsWithLeadingIcon from "./ButtonsWithLeadingIcon";
import ButtonsWithTrailingIcon from "./ButtonsWithTrailingIcon";
import CircularButtons from "./CircularButtons";
import PrimaryButtons from "./PrimaryButtons";
import PrimaryButtonsOnDark from "./PrimaryButtonsOnDark";
import RoundedPrimaryButtons from "./RoundedPrimaryButtons";
import RoundedSecondaryButtons from "./RoundedSecondaryButtons";
import SecondaryButtons from "./SecondaryButtons";
import SecondaryButtonsOnDark from "./SecondaryButtonsOnDark";
import SoftButtons from "./SoftButtons";

const Buttons = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Buttons"}
      breadcrumb={"Application UI / Elements"}
    >
      <PrimaryButtons />
      <SecondaryButtons />
      <PrimaryButtonsOnDark />
      <SecondaryButtonsOnDark />
      <SoftButtons />
      <ButtonsWithLeadingIcon />
      <ButtonsWithTrailingIcon />
      <RoundedPrimaryButtons />
      <RoundedSecondaryButtons />
      <CircularButtons />
    </ComponentPageContainer>
  );
};

export default Buttons;

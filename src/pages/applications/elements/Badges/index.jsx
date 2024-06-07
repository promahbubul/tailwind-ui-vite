import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Flat from "./Flat";
import FlatPill from "./FlatPill";
import FlatPillWithDot from "./FlatPillWithDot";
import FlatWithDot from "./FlatWithDot";
import FlatWithRemoveButton from "./FlatWithRemoveButton";
import PillWithBorder from "./PillWithBorder";
import PillWithBorderAndDot from "./PillWithBorderAndDot";
import SmallFlat from "./SmallFlat";
import SmallFlatPill from "./SmallFlatPill";
import SmallFlatPillWithDot from "./SmallFlatPillWithDot";
import SmallFlatWithDot from "./SmallFlatWithDot";
import SmallPillWithBorder from "./SmallPillWithBorder";
import SmallWithBorder from "./SmallWithBorder";
import WithBorder from "./WithBorder";
import WithBorderAndDot from "./WithBorderAndDot";
import WithBorderAndDotOnDark from "./WithBorderAndDotOnDark";
import WithBorderAndRemoveButton from "./WithBorderAndRemoveButton";
import WithBorderOnDark from "./WithBorderOnDark";

const Badges = () => {
  return (
    <ComponentPageContainer pageTitle={"Badges"}>
      <WithBorder />
      <WithBorderOnDark />
      <WithBorderAndDot />
      <WithBorderAndDotOnDark />
      <PillWithBorder />
      <PillWithBorderAndDot />
      <WithBorderAndRemoveButton />
      <Flat />
      <FlatPill />
      <FlatWithDot />
      <FlatPillWithDot />
      <FlatWithRemoveButton />
      <SmallWithBorder />
      <SmallFlat />
      <SmallPillWithBorder />
      <SmallFlatPill />
      <SmallFlatWithDot />
      <SmallFlatPillWithDot />
    </ComponentPageContainer>
  );
};

export default Badges;

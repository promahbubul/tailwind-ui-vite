import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import DarkWithIcons from "./DarkWithIcons";
import SemiTransparentWithIcons from "./SemiTransparentWithIcons";
import Simple from "./Simple";
import SimpleWithPadding from "./SimpleWithPadding";
import WithFooter from "./WithFooter";
import WithGroups from "./WithGroups";
import WithIcons from "./WithIcons";
import WithImagesAndDescriptions from "./WithImagesAndDescriptions";
import WithPreview from "./WithPreview";

const CommadPalettes = () => {
  return <ComponentPageContainer pageTitle={"Command Palettes"}>
    <Simple />
    <SimpleWithPadding />
    <WithPreview />
    <WithImagesAndDescriptions />
    <WithIcons />
    <SemiTransparentWithIcons />
    <DarkWithIcons />
    <WithGroups />
    <WithFooter />
  </ComponentPageContainer>
};

export default CommadPalettes;

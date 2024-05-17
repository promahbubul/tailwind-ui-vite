import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import BrandedWithSupportedText from "./BrandedWithSupportedText";
import CustomWithAvatar from "./CustomWithAvatar";
import CustomWithCheckOnLeft from "./CustomWithCheckOnLeft";
import CustomWithStatusIndicator from "./CustomWithStatusIndicator";
import SimpleCustom from "./SimpleCustom";
import SimpleNative from "./SimpleNative";
import WithSecondaryText from "./WithSecondaryText";

const SelectMenus = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Select Menus"}
      breadcrumb={"Application UI / Forms"}
    >
      <CustomWithAvatar />
      <SimpleNative />
      <SimpleCustom />
      <CustomWithCheckOnLeft />
      <CustomWithStatusIndicator />
      <WithSecondaryText />
      <BrandedWithSupportedText />
    </ComponentPageContainer>
  );
};

export default SelectMenus;

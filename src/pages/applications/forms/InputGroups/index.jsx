import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import InputWithLeadingIcon from "./ InputWithLeadingIcon";
import InputWithAddOn from "./InputWithAddOn";
import InputWithCornerHint from "./InputWithCornerHint";
import InputWithDisabledState from "./InputWithDisabledState";
import InputWithGrayBackgroundAndBottomBorder from "./InputWithGrayBackgroundAndBottomBorder";
import InputWithHiddenLabel from "./InputWithHiddenLabel";
import InputWithInlineAddOn from "./InputWithInlineAddOn";
import InputWithInlineLeadingAddonAndTrailingDropdown from "./InputWithInlineLeadingAddonAndTrailingDropdown";
import InputWithInlineLeadingAndTrailingAddOns from "./InputWithInlineLeadingAndTrailingAddOns";
import InputWithInlineLeadingDropdown from "./InputWithInlineLeadingDropdown";
import InputWithInsetLabel from "./InputWithInsetLabel";
import InputWithKeyboardShortcut from "./InputWithKeyboardShortcut";
import InputWithLabel from "./InputWithLabel";
import InputWithLabelAndHelpText from "./InputWithLabelAndHelpText";
import InputWithLeadingIconAndTrailingButton from "./InputWithLeadingIconAndTrailingButton";
import InputWithOverlappingLabel from "./InputWithOverlappingLabel";
import InputWithPillShape from "./InputWithPillShape";
import InputWithTrailingIcon from "./InputWithTrailingIcon";
import InputWithValidationError from "./InputWithValidationError";
import InputsWithInsetLabelsAndSharedBorders from "./InputsWithInsetLabelsAndSharedBorders";
import InputsWithSharedBorders from "./InputsWithSharedBorders";

const InputGroups = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Input Groups"}
      breadcrumb={"Application UI /  bForms"}
    >
      <InputWithInlineLeadingAddonAndTrailingDropdown />
      <InputWithLabel />
      <InputWithLabelAndHelpText />
      <InputWithValidationError />
      <InputWithDisabledState />
      <InputWithHiddenLabel />
      <InputWithCornerHint />
      <InputWithLeadingIcon />
      <InputWithTrailingIcon />
      <InputWithAddOn />
      <InputWithInlineAddOn />
      <InputWithInlineLeadingAndTrailingAddOns />
      <InputWithInlineLeadingDropdown />
      <InputWithLeadingIconAndTrailingButton />
      <InputsWithSharedBorders />
      <InputWithInsetLabel />
      <InputsWithInsetLabelsAndSharedBorders />
      <InputWithOverlappingLabel />
      <InputWithPillShape />
      <InputWithGrayBackgroundAndBottomBorder />
      <InputWithKeyboardShortcut />
    </ComponentPageContainer>
  );
};

export default InputGroups;

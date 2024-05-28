import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithPreviewButton from "./ WithPreviewButton";
import Simple from "./Simple";
import WithAvatarAndActions from "./WithAvatarAndActions";
import WithTitleAndPillActions from "./WithTitleAndPillActions";
import WithUnderlineAndActions from "./WithUnderlineAndActions";

const TextArea = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Textareas"}
      breadcrumb={"Application UI / Forms"}
    >
      <Simple />
      <WithAvatarAndActions />
      <WithUnderlineAndActions />
      <WithTitleAndPillActions />
      <WithPreviewButton />
    </ComponentPageContainer>
  );
};

export default TextArea;

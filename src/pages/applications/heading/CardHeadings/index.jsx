import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import WithAction from "./WithAction";
import WithAvatarAndActions from "./WithAvatarAndActions";
import WithAvatarMetaAndDropdown from "./WithAvatarMetaAndDropdown";
import WithDescription from "./WithDescription";
import WithDescriptionAndAction from "./WithDescriptionAndAction";

const CardHeadings = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Card Headings"}
      breadcrumb={"Application UI / Headings"}
    >
      <Simple />
      <WithAction />
      <WithAvatarAndActions />
      <WithDescriptionAndAction />
      <WithDescription />
      <WithAvatarMetaAndDropdown />
    </ComponentPageContainer>
  );
};

export default CardHeadings;

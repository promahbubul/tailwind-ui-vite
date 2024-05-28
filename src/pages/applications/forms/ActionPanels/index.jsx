import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import SimpleWell from "./SimpleWell";
import WithButtonAtTopRight from "./WithButtonAtTopRight";
import WithButtonOnRight from "./WithButtonOnRight";
import WithInput from "./WithInput";
import WithLink from "./WithLink";
import WithToggle from "./WithToggle";
import WithWell from "./WithWell";

const ActionPanels = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Action Panels"}
      breadcrumb={"Application UI /  Forms"}
    >
      <Simple />
      <WithLink />
      <WithButtonOnRight />
      <WithButtonAtTopRight />
      <WithToggle />
      <WithInput />
      <SimpleWell />
      <WithWell />
    </ComponentPageContainer>
  );
};
export default ActionPanels;

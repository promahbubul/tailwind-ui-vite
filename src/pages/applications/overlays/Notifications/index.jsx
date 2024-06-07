import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Condensed from "./Condensed";
import Simple from "./Simple";
import WithActionsBelow from "./WithActionsBelow";
import WithAvatar from "./WithAvatar";
import WithButtonsBelow from "./WithButtonsBelow";
import WithSplitButtons from "./WithSplitButtons";

const Notifications = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Notifications"}
      breadcrumb={"Application UI / Overlays"}
    >
      <Simple />
      <Condensed />
      <WithActionsBelow />
      <WithAvatar />
      <WithSplitButtons />
      <WithButtonsBelow />
    </ComponentPageContainer>
  );
};

export default Notifications;

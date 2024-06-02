import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithAccentBorder from "./WithAccentBorder";
import WithActions from "./WithActions";
import WithDescription from "./WithDescription";
import WithDismissButton from "./WithDismissButton";
import WithLinkOnRight from "./WithLinkOnRight";
import WithList from "./WithList";

const Alert = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Feedback"}
      pageTitle={"Alerts"}
    >
      <WithDescription />
      <WithList />
      <WithActions />
      <WithLinkOnRight />
      <WithAccentBorder />
      <WithDismissButton />
    </ComponentPageContainer>
  );
};

export default Alert;

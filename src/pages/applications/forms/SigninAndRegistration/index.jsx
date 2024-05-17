import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import SimpleCard from "./SimpleCard";
import SimpleNoLabels from "./SimpleNoLabels";
import SimpleOnDark from "./SimpleOnDark";
import SplitScreen from "./SplitScreen";

const SigninAndRegistration = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Forms"}
      pageTitle={"Sign-in and Registration"}
    >
      <Simple />
      <SimpleOnDark />
      <SimpleNoLabels />
      <SplitScreen />
      <SimpleCard />
    </ComponentPageContainer>
  );
};

export default SigninAndRegistration;

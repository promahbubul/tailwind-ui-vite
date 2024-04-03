import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import SplitWithImage from "./SplitWithImage";
import WithBackgroundImage from "./WithBackgroundImage";
import WithNavbarAndFooter from "./WithNavbarAndFooter";
import WithPopularPages from "./WithPopularPages";

const NotFound = () => {
  return (
    <ComponentPageContainer
      pageTitle={"404 Pages"}
      breadcrumb={"Marketing / Feedback"}
    >
      <Simple />
      <SplitWithImage />
      <WithPopularPages />
      <WithBackgroundImage />
      <WithNavbarAndFooter />
    </ComponentPageContainer>
  );
};

export default NotFound;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Contained from "./Contained";
import FullWidthBar from "./FullWidthBar";
import SimpleWithChevrons from "./SimpleWithChevrons";
import SimpleWithSlashes from "./SimpleWithSlashes";

const BreadCrumbs = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Breadcrumbs"}
      breadcrumb={"Application UI / Navigation"}
    >
      <Contained />
      <FullWidthBar />
      <SimpleWithChevrons />
      <SimpleWithSlashes />
    </ComponentPageContainer>
  );
};

export default BreadCrumbs;

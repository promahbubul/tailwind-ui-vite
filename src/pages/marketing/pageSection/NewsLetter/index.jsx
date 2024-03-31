import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CenteredCard from "./CenteredCard";
import SideBySideOnCard from "./SideBySideOnCard";
import SideBySideWithDetails from "./SideBySideWithDetails";
import SimpleSideBySide from "./SimpleSideBySide";
import SimpleSideBySideOnBrand from "./SimpleSideBySideOnBrand";
import SimpleSideBySideOnDark from "./SimpleSideBySideOnDark";
import SimpleStacked from "./SimpleStacked";

const NewsLetter = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Marketing / Page Sections"}
      pageTitle={"Newsletter Sections"}
    >
      <SideBySideWithDetails />
      <SimpleSideBySide />
      <SimpleSideBySideOnDark />
      <SimpleSideBySideOnBrand />
      <SimpleStacked />
      <CenteredCard />
      <SideBySideOnCard />
    </ComponentPageContainer>
  );
};

export default NewsLetter;

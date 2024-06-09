import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import BasicCard from "./BasicCard/index.jsx";
import CardEdgeToEdgeOnMobile from "./CardEdgeToEdgeOnMobile/index.jsx";
import CardWithFooter from "./CardWithFooter/index.jsx";
import CardWithGrayBody from "./CardWithGrayBody/index.jsx";
import CardWithGrayFooter from "./CardWithGrayFooter/index.jsx";
import CardWithHeader from "./CardWithHeader/index.jsx";
import CardWithHeaderAndFooter from "./CardWithHeaderAndFooter/index.jsx";
import Well from "./Well/index.jsx";
import WellEdgeToEdgeOnMobile from "./WellEdgeToEdgeOnMobile/index.jsx";

const Panels = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Layout"}
      pageTitle={"Panels"}
    >
      <BasicCard />
      <CardEdgeToEdgeOnMobile />
      <CardWithHeader />
      <CardWithFooter />
      <CardWithHeaderAndFooter />
      <CardWithGrayFooter />
      <CardWithGrayBody />
      <Well />
      <WellEdgeToEdgeOnMobile />
    </ComponentPageContainer>
  );
};

export default Panels;

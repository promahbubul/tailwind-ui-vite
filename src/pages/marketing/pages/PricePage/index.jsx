import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithComparisonTable from "./WithComparisonTable";
import WithFourTiers from "./WithFourTiers";
import WithThreeTiersAndTestimonials from "./WithThreeTiersAndTestimonials";

const PricePage = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Pricing Pages"}
      breadcrumb={"Marketing / Page Examples"}
    >
      <WithFourTiers />
      <WithComparisonTable />
      <WithThreeTiersAndTestimonials />
    </ComponentPageContainer>
  );
};

export default PricePage;

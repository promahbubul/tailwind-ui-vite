import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import FourTiersWithToggle from "./FourTiersWithToggle";
import SinglePriceWithDetails from "./SinglePriceWithDetails";
import ThreeTiers from "./ThreeTiers";
import ThreeTiersWithDividers from "./ThreeTiersWithDividers";
import ThreeTiersWithEmphasizedTier from "./ThreeTiersWithEmphasizedTier";
import ThreeTiersWithFeatureComparison from "./ThreeTiersWithFeatureComparison";
import ThreeTiersWithToggle from "./ThreeTiersWithToggle";
import ThreeTiersWithToggleOnDark from "./ThreeTiersWithToggleOnDark";
import TwoTiers from "./TwoTiers";
import TwoTiersWithEmphasizedTier from "./TwoTiersWithEmphasizedTier";
import TwoTiersWithExtraTier from "./TwoTiersWithExtraTier";
import WithComparisonTable from "./WithComparisonTable";
import WithComparisonTableOnDark from "./WithComparisonTableOnDark";

const Price = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Pricing Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <SinglePriceWithDetails />
      <ThreeTiers />
      <ThreeTiersWithDividers />
      <ThreeTiersWithEmphasizedTier />
      <ThreeTiersWithToggle />
      <ThreeTiersWithToggleOnDark />
      <FourTiersWithToggle />
      <TwoTiersWithExtraTier />
      <WithComparisonTable />
      <WithComparisonTableOnDark />
      <ThreeTiersWithFeatureComparison />
      <TwoTiers />
      <TwoTiersWithEmphasizedTier />
    </ComponentPageContainer>
  );
};

export default Price;

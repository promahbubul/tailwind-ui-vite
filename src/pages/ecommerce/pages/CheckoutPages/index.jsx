import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import MultiStep from "./MultiStep";
import SingleStepWithOrderSummary from "./SingleStepWithOrderSummary";
import SplitWithOrderSummary from "./SplitWithOrderSummary";
import WithMobileOrderSummaryOverlay from "./WithMobileOrderSummaryOverlay";
import WithOrderSummarySidebar from "./WithOrderSummarySidebar";

const CheckoutPages = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Checkout Pages"}
      breadcrumb={"Ecommerce / Page Examples"}
    >
      <WithOrderSummarySidebar />
      <SingleStepWithOrderSummary />
      <WithMobileOrderSummaryOverlay />
      <MultiStep />
      <SplitWithOrderSummary />
    </ComponentPageContainer>
  );
};

export default CheckoutPages;

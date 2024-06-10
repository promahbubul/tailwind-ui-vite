import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import MultiStep from "./MultiStep";
import SingleStepWithOrderSummary from "./SingleStepWithOrderSummary";
import SplitWithOrderSummary from "./SplitWithOrderSummary";
import WithMobileOrderSummaryOverlay from "./WithMobileOrderSummaryOverlay";
import WithOrderSummarySidebar from "./WithOrderSummarySidebar";

const CheckoutForms = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Checkout Forms"}
      breadcrumb={"Ecommerce / Components"}
    >
      <SingleStepWithOrderSummary />
      <WithMobileOrderSummaryOverlay />
      <MultiStep />
      <WithOrderSummarySidebar />
      <SplitWithOrderSummary />
    </ComponentPageContainer>
  );
};

export default CheckoutForms;

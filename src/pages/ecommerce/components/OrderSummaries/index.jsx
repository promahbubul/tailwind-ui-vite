import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SimpleWithFullOrderDetails from "./SimpleWithFullOrderDetails";
import WithLargeImagesAndProgressBars from "./WithLargeImagesAndProgressBars";
import WithProgressBars from "./WithProgressBars";
import WithSplitImage from "./WithSplitImage";

const OrderSummaries = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Order Summaries"}
      breadcrumb={"Ecommerce / Components"}
    >
      <WithSplitImage />
      <WithProgressBars />
      <WithLargeImagesAndProgressBars />
      <SimpleWithFullOrderDetails />
    </ComponentPageContainer>
  );
};

export default OrderSummaries;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SimpleWithFullOrderDetails from "./SimpleWithFullOrderDetails";
import WithLargeImagesAndProgressBars from "./WithLargeImagesAndProgressBars";
import WithProgressBars from "./WithProgressBars";

const OrderDetailPages = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Order Detail Pages"}
      breadcrumb={"Ecommerce / Page Examples"}
    >
      <WithProgressBars />
      <WithLargeImagesAndProgressBars />
      <SimpleWithFullOrderDetails />
      <WithProgressBars />
      <WithProgressBars />
    </ComponentPageContainer>
  );
};

export default OrderDetailPages;

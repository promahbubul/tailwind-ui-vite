import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Modal from "./Modal";
import Popover from "./Popover";
import SingleColumn from "./SingleColumn";
import SlideOver from "./SlideOver";
import TwoColumnWithQuantityDropdown from "./TwoColumnWithQuantityDropdown";
import WithExtendedSummary from "./WithExtendedSummary";

const ShoppingCarts = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Shopping Carts"}
      breadcrumb={"Ecommerce / Components"}
    >
      <SlideOver />
      <TwoColumnWithQuantityDropdown />
      <SingleColumn />
      <WithExtendedSummary />
      <Modal />
      <Popover />
    </ComponentPageContainer>
  );
};

export default ShoppingCarts;

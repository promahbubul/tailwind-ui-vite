import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SimpleWithPolicyGrid from "./SimpleWithPolicyGrid";
import WithPolicyGridAndExtendedSummary from "./WithPolicyGridAndExtendedSummary";
import WithRelatedProducts from "./WithRelatedProducts";

const ShoppingCartPages = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Shopping Cart Pages"}
      breadcrumb={"Ecommerce / Page Examples"}
    >
      <WithRelatedProducts />
      <SimpleWithPolicyGrid />
      <WithPolicyGridAndExtendedSummary />
    </ComponentPageContainer>
  );
};

export default ShoppingCartPages;

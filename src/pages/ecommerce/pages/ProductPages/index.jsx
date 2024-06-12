import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithExpandableProductDetails from "./WithExpandableProductDetails";
import WithFeaturedDetails from "./WithFeaturedDetails";
import WithImageGrid from "./WithImageGrid";
import WithRelatedProducts from "./WithRelatedProducts";
import WithTabsAndRelatedProducts from "./WithTabsAndRelatedProducts";

const ProductPages = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Ecommerce / Page Examples"}
      pageTitle={"Ecommerce Page Examples"}
    >
      <WithRelatedProducts />
      <WithImageGrid />
      <WithExpandableProductDetails />
      <WithFeaturedDetails />
      <WithTabsAndRelatedProducts />
    </ComponentPageContainer>
  );
};

export default ProductPages;

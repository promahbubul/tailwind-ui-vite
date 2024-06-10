import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithColorAndSizeSelector from "./WithColorAndSizeSelector";
import WithColorSelectorAndDescription from "./WithColorSelectorAndDescription";
import WithColorSelectorSizeSelectorAndDetailsLink from "./WithColorSelectorSizeSelectorAndDetailsLink";
import WithLargeSizeSelector from "./WithLargeSizeSelector";

const ProductsQuickviews = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Ecommerce / Components"}
      pageTitle={"Tailwind CSS Product Quickviews"}
    >
      <WithColorAndSizeSelector />
      <WithColorSelectorSizeSelectorAndDetailsLink />
      <WithLargeSizeSelector />
      <WithColorSelectorAndDescription />
    </ComponentPageContainer>
  );
};

export default ProductsQuickviews;

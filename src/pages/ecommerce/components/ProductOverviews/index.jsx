import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SplitWithImage from "./SplitWithImage";
import WithImageGalleryAndExpandableDetails from "./WithImageGalleryAndExpandableDetails";
import WithImageGrid from "./WithImageGrid";
import WithTabs from "./WithTabs";
import WithTieredImages from "./WithTieredImages";

const ProductOverviews = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Product Overviews"}
      breadcrumb={"Ecommerce / Components"}
    >
      .
      <WithImageGrid />
      <WithTieredImages />
      <WithImageGalleryAndExpandableDetails />
      <SplitWithImage />
      <WithTabs />
    </ComponentPageContainer>
  );
};

export default ProductOverviews;

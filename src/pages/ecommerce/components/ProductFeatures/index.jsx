import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithAlternatingSections from "./WithAlternatingSections";
import WithFadingImage from "./WithFadingImage";
import WithHeaderImagesAndDescriptions from "./WithHeaderImagesAndDescriptions";
import WithImageGrid from "./WithImageGrid";
import WithSplitImage from "./WithSplitImage";
import WithSquareImages from "./WithSquareImages";
import WithTabs from "./WithTabs";
import WithTieredImages from "./WithTieredImages";
import WithWideImages from "./WithWideImages";

const ProductFeatures = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Product Features"}
      breadcrumb={"Ecommerce / Components"}
    >
      <WithImageGrid />
      <WithHeaderImagesAndDescriptions />
      <WithFadingImage />
      <WithWideImages />
      <WithSplitImage />
      <WithTabs />
      <WithAlternatingSections />
      <WithSquareImages />
      <WithTieredImages />
    </ComponentPageContainer>
  );
};

export default ProductFeatures;

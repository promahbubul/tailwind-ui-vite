import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CardWithFullDetails from "./CardWithFullDetails";
import Simple from "./Simple";
import WithBorderGrid from "./WithBorderGrid";
import WithCTALink from "./WithCTALink";
import WithColorSwatchesAndHorizontalScrolling from "./WithColorSwatchesAndHorizontalScrolling";
import WithImageOverlayAndAddButton from "./WithImageOverlayAndAddButton";
import WithInlinePrice from "./WithInlinePrice";
import WithInlinePriceAndCTALink from "./WithInlinePriceAndCTALink";
import WithSupportingText from "./WithSupportingText";
import WithTallImages from "./WithTallImages";
import WithTallImagesAndCTALink from "./WithTallImagesAndCTALink";

export const ProductLists = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Product Lists"}
      breadcrumb={"Ecommerce / Components"}
    >
      <WithInlinePrice />
      <Simple />
      <WithCTALink />
      <WithColorSwatchesAndHorizontalScrolling />
      <WithTallImages />
      <WithImageOverlayAndAddButton />
      <WithTallImagesAndCTALink />
      <WithBorderGrid />
      <WithSupportingText />
      <WithInlinePriceAndCTALink />
      <CardWithFullDetails />
    </ComponentPageContainer>
  );
  
};

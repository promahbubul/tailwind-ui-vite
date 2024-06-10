import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithCenteredLogoAndFeaturedCategories from "./WithCenteredLogoAndFeaturedCategories";
import WithDoubleColumnAndPersistentMobileNav from "./WithDoubleColumnAndPersistentMobileNav";
import WithFeaturedCategories from "./WithFeaturedCategories";
import WithImageGrid from "./WithImageGrid";
import WithSimpleMenuAndPromo from "./WithSimpleMenuAndPromo";

const StoreNavigation = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Store Navigation"}
      breadcrumb={"Ecommerce / Components"}
    >
      <WithFeaturedCategories />
      <WithImageGrid />
      <WithSimpleMenuAndPromo />
      <WithCenteredLogoAndFeaturedCategories />
      <WithDoubleColumnAndPersistentMobileNav />
    </ComponentPageContainer>
  );
};

export default StoreNavigation;

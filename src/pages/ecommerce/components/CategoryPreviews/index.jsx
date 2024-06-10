import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ThreeColumn from "./ThreeColumn";
import ThreeColumnWithDescription from "./ThreeColumnWithDescription";
import WithBackgroundImageAndDetailOverlay from "./WithBackgroundImageAndDetailOverlay";
import WithImageBackgrounds from "./WithImageBackgrounds";
import WithScrollingCards from "./WithScrollingCards";
import WithSplitImages from "./WithSplitImages";

const CategoryPreviews = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Ecommerce / Components"}
      pageTitle={"Tailwind CSS Category Previews"}
    >
      <ThreeColumn />
      <WithImageBackgrounds />
      <WithBackgroundImageAndDetailOverlay />
      <ThreeColumnWithDescription />
      <WithScrollingCards />
      <WithSplitImages />
    </ComponentPageContainer>
  );
};

export default CategoryPreviews;

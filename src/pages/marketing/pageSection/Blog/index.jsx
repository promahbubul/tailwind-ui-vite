import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SingleColumn from "./SingleColumn";
import SingleColumnWithImages from "./SingleColumnWithImages";
import ThreeColumn from "./ThreeColumn";
import ThreeColumnWithBackgroundImages from "./ThreeColumnWithBackgroundImages";
import ThreeColumnWithImages from "./ThreeColumnWithImages";
import WithFeaturedPost from "./WithFeaturedPost";
import WithPhotoAndList from "./WithPhotoAndList";

const Blog = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Blog Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <ThreeColumn />
      <ThreeColumnWithImages />
      <ThreeColumnWithBackgroundImages />
      <SingleColumn />
      <SingleColumnWithImages />
      <WithFeaturedPost />
      <WithPhotoAndList />
    </ComponentPageContainer>
  );
};

export default Blog;

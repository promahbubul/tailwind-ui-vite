import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithImageHeaderAndDetailProductGrid from "./WithImageHeaderAndDetailProductGrid";
import WithLargeImagesAndFiltersSidebar from "./WithLargeImagesAndFiltersSidebar";
import WithProductGridAndPagination from "./WithProductGridAndPagination";
import WithTextHeaderAndImageProductGrid from "./WithTextHeaderAndImageProductGrid";
import WithTextHeaderAndSimpleProductGrid from "./WithTextHeaderAndSimpleProductGrid";

const CategoryPages = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Category Pages"}
      breadcrumb={"Ecommerce / Page Examples"}
    >
      <WithTextHeaderAndImageProductGrid />
      <WithImageHeaderAndDetailProductGrid />
      <WithTextHeaderAndSimpleProductGrid />
      <WithProductGridAndPagination />
      <WithLargeImagesAndFiltersSidebar />
    </ComponentPageContainer>
  );
};

export default CategoryPages;

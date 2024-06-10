import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import AvatarsWithSeparateDescription from "./AvatarsWithSeparateDescription";
import MultiColumn from "./MultiColumn";
import SimpleWithAvatars from "./SimpleWithAvatars";
import WithSummaryChart from "./WithSummaryChart";

const Reviews = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Reviews"}
      breadcrumb={"Ecommerce / Components"}
    >
      <MultiColumn />
      <WithSummaryChart />
      <AvatarsWithSeparateDescription />
      <SimpleWithAvatars />
    </ComponentPageContainer>
  );
};

export default Reviews;

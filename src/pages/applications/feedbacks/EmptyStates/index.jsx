import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import WithDashedBorder from "./WithDashedBorder";
import WithRecommendations from "./WithRecommendations";
import WithRecommendationsGrid from "./WithRecommendationsGrid";
import WithStartingPoints from "./WithStartingPoints";
import WithTemplates from "./WithTemplates";

const EmptyStates = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Empty States"}
      breadcrumb={"Application UI / Feedback"}
    >
      <Simple />
      <WithDashedBorder />
      <WithStartingPoints />
      <WithRecommendations />
      <WithTemplates />
      <WithRecommendationsGrid />
    </ComponentPageContainer>
  );
};

export default EmptyStates;

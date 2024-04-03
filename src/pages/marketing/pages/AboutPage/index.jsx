import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Dark from "./Dark";
import WithImageTiles from "./WithImageTiles";
import WithTimelineAndStats from "./WithTimelineAndStats";

const AboutPage = () => {
  return (
    <ComponentPageContainer
      pageTitle={"About Pages"}
      breadcrumb={"Marketing / Page Examples"}
    >
      <WithImageTiles />
      <WithTimelineAndStats />
      <Dark />
    </ComponentPageContainer>
  );
};

export default AboutPage;

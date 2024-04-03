import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SimpleInCards from "./SimpleInCards";
import SimpleOnDark from "./SimpleOnDark";
import WithBrandIcon from "./WithBrandIcon";
import WithSharedBorders from "./WithSharedBorders";
import WithTrending from "./WithTrending";

const ApplicationStats = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Data Display"}
      pageTitle={"Stats"}
    >
      <WithTrending />
      <SimpleOnDark />
      <SimpleInCards />
      <WithBrandIcon />
      <WithSharedBorders />
    </ComponentPageContainer>
  );
};

export default ApplicationStats;

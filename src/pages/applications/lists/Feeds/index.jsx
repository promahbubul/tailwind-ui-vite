import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SimpleWithIcons from "./SimpleWithIcons";
import WithComments from "./WithComments";
import WithMultipleItemTypes from "./WithMultipleItemTypes";

const Feeds = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Feeds"}
      breadcrumb={"Application UI / Lists"}
    >
      <SimpleWithIcons />
      <WithComments />
      <WithMultipleItemTypes />
    </ComponentPageContainer>
  );
};

export default Feeds;

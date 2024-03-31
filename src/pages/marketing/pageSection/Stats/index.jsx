import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import SimpleGrid from "./SimpleGrid";
import SimpleGridOnDark from "./SimpleGridOnDark";
import SimpleOnDark from "./SimpleOnDark";
import SplitWithImage from "./SplitWithImage";
import Stepped from "./Stepped";
import Timeline from "./Timeline";
import WithBackgroundImage from "./WithBackgroundImage";
import WithDescription from "./WithDescription";
import WithTwoColumnDescriptionOnDark from "./WithTwoColumnDescriptionOnDark";

const Stats = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Stats"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <Simple />
      <SimpleOnDark />
      <SimpleGrid />
      <SimpleGridOnDark />
      <WithBackgroundImage />
      <SplitWithImage />
      <Timeline />
      <Stepped />
      <WithTwoColumnDescriptionOnDark />
      <WithDescription />
    </ComponentPageContainer>
  );
};

export default Stats;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import BarWithUnderline from "./BarWithUnderline";
import FullWidthTabsWithUnderline from "./FullWidthTabsWithUnderline";
import SimpleOnDark from "./SimpleOnDark";
import TabsInPills from "./TabsInPills";
import TabsInPillsOnGray from "./TabsInPillsOnGray";
import TabsInPillsWithBrandColor from "./TabsInPillsWithBrandColor";
import TabsWithUnderline from "./TabsWithUnderline";
import TabsWithUnderlineAndBadges from "./TabsWithUnderlineAndBadges";
import TabsWithUnderlineAndIcons from "./TabsWithUnderlineAndIcons";

const Tabs = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tabs"}
      breadcrumb={"Application UI / Navigation"}
    >
      <TabsWithUnderline />
      <TabsWithUnderlineAndIcons />
      <TabsInPills />
      <TabsInPillsOnGray />
      <TabsInPillsWithBrandColor />
      <FullWidthTabsWithUnderline />
      <BarWithUnderline />
      <TabsWithUnderlineAndBadges />
      <SimpleOnDark />
    </ComponentPageContainer>
  );
};

export default Tabs;

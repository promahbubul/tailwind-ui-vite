import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SimpleTable from "./ SimpleTable";
import Cards from "./Cards";
import ColorPicker from "./ColorPicker";
import ListWithDescription from "./ListWithDescription";
import ListWithDescriptionsInPanel from "./ListWithDescriptionsInPanel";
import ListWithInlineDescription from "./ListWithInlineDescription";
import ListWithRadioOnRight from "./ListWithRadioOnRight";
import SimpleInlineList from "./SimpleInlineList";
import SimpleList from "./SimpleList";
import SimpleListWithRadioOnRight from "./SimpleListWithRadioOnRight";
import SmallCards from "./SmallCards";
import StackedCards from "./StackedCards";

const RadioGroups = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Forms"}
      pageTitle={"Radio Groups"}
    >
      <SimpleList />
      <SimpleInlineList />
      <ListWithDescription />
      <ListWithInlineDescription />
      <ListWithRadioOnRight />
      <SimpleListWithRadioOnRight />
      <ColorPicker />
      <Cards />
      <SmallCards />
      <StackedCards />
      <SimpleTable />
      <ListWithDescriptionsInPanel />
    </ComponentPageContainer>
  );
};

export default RadioGroups;

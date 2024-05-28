import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ListWithCheckboxOnRight from "./ListWithCheckboxOnRight";
import ListWithDescription from "./ListWithDescription";
import ListWithInlineDescription from "./ListWithInlineDescription";
import SimpleListWithHeading from "./SimpleListWithHeading";

const CheckBoxes = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Checkboxes"}
      breadcrumb={"Application UI / Forms"}
    >
      <ListWithDescription />
      <ListWithInlineDescription />
      <ListWithCheckboxOnRight />
      <SimpleListWithHeading />
    </ComponentPageContainer>
  );
};

export default CheckBoxes;

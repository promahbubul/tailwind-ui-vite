import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SidebarFilters from "./SidebarFilters";
import WithCenteredTextAndDropdownProductFilters from "./WithCenteredTextAndDropdownProductFilters";
import WithDropdownProductFilters from "./WithDropdownProductFilters";
import WithExpandableProductFilterPanel from "./WithExpandableProductFilterPanel";
import WithInlineActionsAndExpandableSidebarFilters from "./WithInlineActionsAndExpandableSidebarFilters";

const CategoryFilters = () => {
  return <ComponentPageContainer pageTitle={"Tailwind CSS Category Filters"} breadcrumb={"Ecommerce / Components"}>
    <WithInlineActionsAndExpandableSidebarFilters />
    <WithCenteredTextAndDropdownProductFilters />
    <WithDropdownProductFilters />
    <WithExpandableProductFilterPanel />
    <SidebarFilters />
  </ComponentPageContainer>
};

export default CategoryFilters;

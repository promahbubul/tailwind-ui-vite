import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import FullWidth from "./FullWidth";
import FullWidthTwoColumns from "./FullWidthTwoColumns";
import Simple from "./Simple";
import SimpleWithDescriptions from "./SimpleWithDescriptions";
import StackedWithFooterActions from "./StackedWithFooterActions";
import StackedWithFooterList from "./StackedWithFooterList";
import TwoColumn from "./TwoColumn";

const FlyoutMenu = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Flyout Menus"}
      breadcrumb={"Marketing / Elements"}
    >
      <StackedWithFooterActions />
      <FullWidthTwoColumns />
      <StackedWithFooterList />
      <FullWidth />
      <SimpleWithDescriptions />
      <TwoColumn />
      <Simple />
    </ComponentPageContainer>
  );
};

export default FlyoutMenu;

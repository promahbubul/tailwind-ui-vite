import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ConstrainedThreeColumn from "./ConstrainedThreeColumn";
import ConstrainedWithStickyColumns from "./ConstrainedWithStickyColumns";
import FullWidthSecondaryColumnOnRight from "./FullWidthSecondaryColumnOnRight";
import FullWidthThreeColumn from "./FullWidthThreeColumn";
import FullWidthWithNarrowSidebar from "./FullWidthWithNarrowSidebar";
import FullWidthWithNarrowSidebarAndHeader from "./FullWidthWithNarrowSidebarAndHeader";

const MultiColumnLayout = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Multi-Column Layouts"}
      breadcrumb={"Application UI / Application Shells"}
    >
      <FullWidthThreeColumn />
      <FullWidthSecondaryColumnOnRight />
      <ConstrainedThreeColumn />
      <ConstrainedWithStickyColumns />
      <FullWidthWithNarrowSidebar />
      <FullWidthWithNarrowSidebarAndHeader />
    </ComponentPageContainer>
  );
};

export default MultiColumnLayout;

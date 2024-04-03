import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CardWithAvatarAndStats from "./CardWithAvatarAndStats";
import WithActions from "./WithActions";
import WithActionsAndBreadcrumbs from "./WithActionsAndBreadcrumbs";
import WithActionsAndBreadcrumbsOnDark from "./WithActionsAndBreadcrumbsOnDark";
import WithActionsOnDark from "./WithActionsOnDark";
import WithAvatarAndActions from "./WithAvatarAndActions";
import WithBannerImage from "./WithBannerImage";
import WithFiltersAndAction from "./WithFiltersAndAction";
import WithLogoMetaAndActions from "./WithLogoMetaAndActions";
import WithMetaActionsAndBreadcrumbs from "./WithMetaActionsAndBreadcrumbs";
import WithMetaActionsAndBreadcrumbsOnDark from "./WithMetaActionsAndBreadcrumbsOnDark";
import WithMetaAndActions from "./WithMetaAndActions";
import WithMetaAndActionsOnDark from "./WithMetaAndActionsOnDark";

const PageHeadings = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Headings"}
      pageTitle={"Page Headings"}
    >
      <WithMetaAndActions />
      <WithActions />
      <WithActionsOnDark />
      <WithActionsAndBreadcrumbs />
      <WithActionsAndBreadcrumbsOnDark />
      <WithMetaAndActionsOnDark />
      <WithBannerImage />
      <WithAvatarAndActions />
      <CardWithAvatarAndStats />
      <WithMetaActionsAndBreadcrumbs />
      <WithMetaActionsAndBreadcrumbsOnDark />
      <WithFiltersAndAction />
      <WithLogoMetaAndActions />
    </ComponentPageContainer>
  );
};

export default PageHeadings;

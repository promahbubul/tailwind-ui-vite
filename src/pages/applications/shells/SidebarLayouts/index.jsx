import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import BrandSidebar from "./BrandSidebar";
// import BrandSidebarWithHeader from "./BrandSidebarWithHeader";
import DarkSidebar from "./DarkSidebar";
import DarkSidebarWithHeader from "./DarkSidebarWithHeader";
import LightSidebar from "./LightSidebar";
import LightSidebarWithConstrainedContentArea from "./LightSidebarWithConstrainedContentArea";
import LightSidebarWithHeader from "./LightSidebarWithHeader";
import LightSidebarWithOffWhiteBackground from "./LightSidebarWithOffWhiteBackground";

const SidebarLayouts = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Sidebar Layouts"}
      breadcrumb={"Application UI / Application Shells"}
    >
      {/* <BrandSidebarWithHeader /> */}
      <DarkSidebarWithHeader />
      <LightSidebarWithHeader />
      <BrandSidebar />
      <DarkSidebar />
      <LightSidebarWithConstrainedContentArea />
      <LightSidebarWithOffWhiteBackground />
      <LightSidebar />
    </ComponentPageContainer>
  );
};

export default SidebarLayouts;

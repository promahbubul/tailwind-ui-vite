import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SidebarOnDark from "./SidebarOnDark";
import Stacked from "./Stacked";

const SettingsScreen = () => {
  return <ComponentPageContainer pageTitle={"Tailwind CSS Settings Screens"} breadcrumb={"Application UI Page / Examples"}>
    <SidebarOnDark />
    <Stacked />
  </ComponentPageContainer>
};

export default SettingsScreen;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SidebarOnDark from "./SidebarOnDark";
import Stacked from "./Stacked";

const HomeScreen = () => {
  return <ComponentPageContainer pageTitle={"Tailwind CSS Home Screens"} breadcrumb={"Application UI Page / Examples"}>
    
    <Stacked/>
    <SidebarOnDark />
    
  </ComponentPageContainer>
};

export default HomeScreen;

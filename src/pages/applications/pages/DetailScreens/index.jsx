import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import SidebarOnDark from "./SidebarOnDark";
import Stacked from "./Stacked";

const DetailScreens = () => {
  return <ComponentPageContainer pageTitle={"Tailwind CSS Detail Screens"} breadcrumb={"Application UI Page / Examples"} >
    <SidebarOnDark />
    <Stacked/>
  </ComponentPageContainer>
};

export default DetailScreens;

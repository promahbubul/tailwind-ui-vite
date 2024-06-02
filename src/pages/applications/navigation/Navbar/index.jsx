import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import DarkWithQuickAction from "./DarkWithQuickAction";
import DarkWithSearch from "./DarkWithSearch";
import Simple from "./Simple";
import SimpleDark from "./SimpleDark";
import SimpleDarkWithMenuButtonOnLeft from "./SimpleDarkWithMenuButtonOnLeft";
import SimpleWithMenuButtonOnLeft from "./SimpleWithMenuButtonOnLeft";
import WithCenteredSearchAndSecondaryLinks from "./WithCenteredSearchAndSecondaryLinks";
import WithCenteredSearchAndSecondaryLinksDark from "./WithCenteredSearchAndSecondaryLinksDark";
import WithQuickAction from "./WithQuickAction";
import WithSearch from "./WithSearch";
import WithSearchInColumnLayout from "./WithSearchInColumnLayout";

const Navbar = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Navbars"}
      breadcrumb={"Application UI / Navigation"}
    >
      <SimpleDarkWithMenuButtonOnLeft />
      <DarkWithQuickAction />
      <SimpleDark />
      <SimpleWithMenuButtonOnLeft />
      <Simple />
      <WithQuickAction />
      <DarkWithSearch />
      <WithSearch />
      <WithCenteredSearchAndSecondaryLinksDark />
      <WithCenteredSearchAndSecondaryLinks />
      <WithSearchInColumnLayout />
    </ComponentPageContainer>
  );
};

export default Navbar;

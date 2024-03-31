import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Centered from "./Centered";
import CenteredOnDark from "./CenteredOnDark";
import CenteredWithBackgroundImage from "./CenteredWithBackgroundImage";
import CenteredWithEyebrow from "./CenteredWithEyebrow";
import Simple from "./Simple";
import SimpleOnDark from "./SimpleOnDark";
import SimpleWithBackgroundImage from "./SimpleWithBackgroundImage";
import SimpleWithEyebrow from "./SimpleWithEyebrow";
import WithCards from "./WithCards";
import WithStats from "./WithStats";

const Header = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Header Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <WithStats />
      <Centered />
      <CenteredWithEyebrow />
      <SimpleWithEyebrow />
      <CenteredOnDark />
      <WithCards />
      <Simple />
      <SimpleOnDark />
      <SimpleWithBackgroundImage />
      <CenteredWithBackgroundImage />
    </ComponentPageContainer>
  );
};

export default Header;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CenteredWithSingleAction from "./CenteredWithSingleAction";
import CenteredWithWideButtons from "./CenteredWithWideButtons";
import SimpleAlert from "./SimpleAlert";
import SimpleAlertWithLeftAlignedButtons from "./SimpleAlertWithLeftAlignedButtons";
import SimpleWithDismissButton from "./SimpleWithDismissButton";
import SimpleWithGrayFooter from "./SimpleWithGrayFooter";

const Dialogs = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Overlays"}
      pageTitle={"Dialogs"}
    >
      <SimpleWithGrayFooter />
      <CenteredWithSingleAction />
      <CenteredWithWideButtons />
      <SimpleAlert />
      <SimpleWithDismissButton />
      <SimpleAlertWithLeftAlignedButtons />
    </ComponentPageContainer>
  );
};

export default Dialogs;

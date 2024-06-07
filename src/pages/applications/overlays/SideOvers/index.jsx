import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ContactListExample from "./ContactListExample";
import CreateProjectFormExample from "./CreateProjectFormExample/inddx";
import Empty from "./Empty";
import FileDetailsExample from "./FileDetailsExample";
import UserProfileExample from "./UserProfileExample";
import WideCreateProjectFormExample from "./WideCreateProjectFormExample";
import WideEmpty from "./WideEmpty";
import WideHorizontalUserProfileExample from "./WideHorizontalUserProfileExample";
import WithBackgroundOverlay from "./WithBackgroundOverlay";
import WithBrandedHeader from "./WithBrandedHeader";
import WithCloseButtonOnOutside from "./WithCloseButtonOnOutside";
import WithStickyFooter from "./WithStickyFooter";

const SideOvers = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Overlays"}
      pageTitle={"Slide-overs"}
    >
      <WithCloseButtonOnOutside />
      <Empty />
      <WideEmpty />
      <WithBackgroundOverlay />
      <WithBrandedHeader />
      <WithStickyFooter />
      <CreateProjectFormExample />
      <WideCreateProjectFormExample />
      <UserProfileExample />
      <WideHorizontalUserProfileExample />
      <ContactListExample />
      <FileDetailsExample />
    </ComponentPageContainer>
  );
};

export default SideOvers;

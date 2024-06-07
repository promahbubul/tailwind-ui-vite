import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import AvatarGroupStackedBottomToTop from "./AvatarGroupStackedBottomToTop";
import AvatarGroupStackedTopToBottom from "./AvatarGroupStackedTopToBottom";
import CircularAvatars from "./CircularAvatars";
import CircularAvatarsWithBottomNotification from "./CircularAvatarsWithBottomNotification";
import CircularAvatarsWithPlaceholderIcon from "./CircularAvatarsWithPlaceholderIcon";
import CircularAvatarsWithPlaceholderInitials from "./CircularAvatarsWithPlaceholderInitials";
import CircularAvatarsWithTopNotification from "./CircularAvatarsWithTopNotification";
import RoundedAvatars from "./RoundedAvatars";
import RoundedAvatarsWithBottomNotification from "./RoundedAvatarsWithBottomNotification";
import RoundedAvatarsWithTopNotification from "./RoundedAvatarsWithTopNotification";
import WithText from "./WithText";

const Avatars = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Avatars"}
      breadcrumb={"Application UI / Elements"}
    >
      <AvatarGroupStackedBottomToTop />
      <CircularAvatars />
      <RoundedAvatars />
      <CircularAvatarsWithTopNotification />
      <RoundedAvatarsWithTopNotification />
      <CircularAvatarsWithBottomNotification />
      <RoundedAvatarsWithBottomNotification />
      <CircularAvatarsWithPlaceholderIcon />
      <CircularAvatarsWithPlaceholderInitials />
      <AvatarGroupStackedTopToBottom />
      <WithText />
    </ComponentPageContainer>
  );
};

export default Avatars;

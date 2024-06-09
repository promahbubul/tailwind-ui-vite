import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import AlignedToBottom from "./AlignedToBottom";
import AlignedToCenter from "./AlignedToCenter";
import Basic from "./Basic";
import BasicResponsive from "./BasicResponsive";
import MediaOnRight from "./MediaOnRight";
import Nested from "./Nested";
import StretchedToFit from "./StretchedToFit";
import WideResponsive from "./WideResponsive";

const MediaObjects = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Layout"}
      pageTitle={"Media Objects"}
    >
      <Basic />
      <AlignedToCenter />
      <AlignedToBottom />
      <StretchedToFit />
      <MediaOnRight />
      <BasicResponsive />
      <WideResponsive />
      <Nested />
    </ComponentPageContainer>
  );
};

export default MediaObjects;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ActionsWithSharedBorders from "./ActionsWithSharedBorders";
import ContactCards from "./ContactCards";
import ContactCardsWithSmallPortraits from "./ContactCardsWithSmallPortraits";
import HorizontalLinkCards from "./HorizontalLinkCards";
import ImagesWithDetails from "./ImagesWithDetails";
import LogosCardsWithDescriptionList from "./LogosCardsWithDescriptionList";
import SimpleCards from "./SimpleCards";

const GridLists = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Grid Lists"}
      breadcrumb={"Application UI / Lists"}
    >
      <ContactCardsWithSmallPortraits />
      <ContactCards />
      <SimpleCards />
      <HorizontalLinkCards />
      <ActionsWithSharedBorders />
      <ImagesWithDetails />
      <LogosCardsWithDescriptionList />
    </ComponentPageContainer>
  );
};

export default GridLists;

import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CardWithDividers from "./CardWithDividers";
import CardWithDividersFullWidthOnMobile from "./CardWithDividersFullWidthOnMobile";
import FlatCardWithDividers from "./FlatCardWithDividers";
import SeparateCards from "./SeparateCards";
import SeparateCardsFullWidthOnMobile from "./SeparateCardsFullWidthOnMobile";
import SimpleWithDividers from "./SimpleWithDividers";
import SimpleWithDividersFullWidthOnMobile from "./SimpleWithDividersFullWidthOnMobile";

const ListContainers = () => {
  return (
    <ComponentPageContainer
      pageTitle={"List containers"}
      breadcrumb={"Application UI / Layout"}
    >
      <SimpleWithDividers />
      <CardWithDividers />
      <CardWithDividersFullWidthOnMobile />
      <SeparateCards />
      <SeparateCardsFullWidthOnMobile />
      <FlatCardWithDividers />
      <SimpleWithDividersFullWidthOnMobile />
    </ComponentPageContainer>
  );
};

export default ListContainers;

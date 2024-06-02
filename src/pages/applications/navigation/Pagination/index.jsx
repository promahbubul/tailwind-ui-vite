import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CardFooterWithPageButtons from "./CardFooterWithPageButtons";
import CenteredPageNumbers from "./CenteredPageNumbers";
import SimpleCardFooter from "./SimpleCardFooter";

const Pagination = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Pagination"}
      breadcrumb={"Application UI / Navigation"}
    >
      <CardFooterWithPageButtons />
      <CenteredPageNumbers />
      <SimpleCardFooter />
    </ComponentPageContainer>
  );
};

export default Pagination;

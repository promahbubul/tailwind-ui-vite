import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import WithDividers from "./WithDividers";
import WithIcons from "./WithIcons";
import WithMinimalMenuIcon from "./WithMinimalMenuIcon";
import WithSimpleHeader from "./WithSimpleHeader";

const DrodpDown = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Dropdowns"}
      breadcrumb={"Application UI / Elements"}
    >
      <Simple />
      <WithDividers />
      <WithIcons />
      <WithMinimalMenuIcon />
      <WithSimpleHeader />
    </ComponentPageContainer>
  );
};

export default DrodpDown;

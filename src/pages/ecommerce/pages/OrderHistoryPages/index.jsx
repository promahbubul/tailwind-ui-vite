import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import WithInvoiceList from "./WithInvoiceList";
import WithInvoiceListAndQuickActions from "./WithInvoiceListAndQuickActions";
import WithInvoicePanels from "./WithInvoicePanels";
import WithInvoiceTables from "./WithInvoiceTables";

const OrderHistoryPages = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Order History Pages"}
      breadcrumb={"Ecommerce / Page Examples"}
    >
      <Simple />
      <WithInvoiceListAndQuickActions />
      <WithInvoicePanels />
      <WithInvoiceTables />
      <WithInvoiceList />
    </ComponentPageContainer>
  );
};

export default OrderHistoryPages;

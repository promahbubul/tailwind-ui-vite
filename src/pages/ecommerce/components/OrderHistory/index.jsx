import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import InvoiceListWithQuickActions from "./InvoiceListWithQuickActions";
import InvoicePanels from "./InvoicePanels";
import InvoiceTable from "./InvoiceTable";
import InvoiceList from "./Invoicelist";

const OrderHistory = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Order History"}
      breadcrumb={"Ecommerce / Components"}
    >
      <InvoicePanels />
      <InvoiceTable />
      <InvoiceList />
      <InvoiceListWithQuickActions />
    </ComponentPageContainer>
  );
};

export default OrderHistory;

import Links from "../../../../shared/components/Link";

const Navigation = () => {
  return (
    <div className="py-3 border-y  border-y-gray-200 items-center ">
      <div className="max-w-7xl w-full mx-auto  flex flex-row justify-between items-center">
        {/* LEFT */}
        <div className="flex  flex-row gap-5 ">
          <Links to={"#product-marketing"}>Marketing</Links>
          <Links to={"#product-application-ui"}>Application UI</Links>
          <Links to={"#product-ecommerce"}>Ecommerce</Links>
        </div>

        {/* RIGHT */}
        <div className="flex  flex-row gap-5 ">
          <Links to={"#pricing"}>Price</Links>
          <Links to={"/#faqs"}>FAQ</Links>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

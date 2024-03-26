import { useEffect, useState } from "react";
import CategloSectionHeading from "../../../../shared/components/Catelog/CatlogSectionHeading";
import Components from "./Components";
import PageExamples from "./PageExamples";

const Ecommerce = () => {
  const [ecommerceData, setEcommerceData] = useState(null);

  useEffect(() => {
    fetch("/components.json")
      .then((res) => res.json())
      .then((data) => setEcommerceData(data.ecommerce));
  }, []);
  return (
    <div className="mt-20 mb-14">
      <CategloSectionHeading
        className={"my-10"}
        title={"Ecommerce"}
        subtitle={
          "Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end."
        }
      />
      <Components data={ecommerceData?.components} />
      <PageExamples data={ecommerceData?.pageExamples} />
    </div>
  );
};

export default Ecommerce;

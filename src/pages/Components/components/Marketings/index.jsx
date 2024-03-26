import { useEffect, useState } from "react";

import Elements from "./Elements";
import Feedbacks from "./Feedbacks";
import PageExamples from "./PageExamples";
import CategloSectionHeading from "../../../../shared/components/Catelog/CatlogSectionHeading";
import PageSections from "./PageSections";

const Marketings = () => {
  const [marketing, setMarketing] = useState(null);

  useEffect(() => {
    fetch("/components.json")
      .then((res) => res.json())
      .then((data) => setMarketing(data.marketing));
  }, []);

  return (
    <div className="mt-20 mb-14">
      <CategloSectionHeading
        className={"my-10"}
        title={"Marketing"}
        subtitle={
          "Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites."
        }
      />
      <PageSections pageSectionData={marketing?.pageSection} />
      <Elements elementData={marketing?.elements} />
      <Feedbacks feedbackData={marketing?.feedback} />
      <PageExamples pageExamplesData={marketing?.pageExamples} />
    </div>
  );
};

export default Marketings;

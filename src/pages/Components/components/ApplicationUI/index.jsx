import { useEffect, useState } from "react";
import CategloSectionHeading from "../../../../shared/components/Catelog/CatlogSectionHeading";
import ApplicationShells from "./ApplicationShells";
import Headings from "./Headings";
import DataDisplay from "./DataDisplay";
import Lists from "./Lists";
import Forms from "./Forms";
import Feedback from "./Feedback";
import Navigation from "./Navigation";
import Overlays from "./Overlays";
import Elements from "./Elements";
import Layout from "./Layout";
import PageExamples from "./PageExamples";

const ApplicationUI = () => {
  const [applicationUI, setApplicationUI] = useState(null);

  useEffect(() => {
    fetch("/components.json")
      .then((res) => res.json())
      .then((data) => setApplicationUI(data.applicationUI));
  }, []);

  return (
    <div className="mt-20 mb-14" id="#product-application-ui">
      <CategloSectionHeading
        className={"my-10"}
        title={"Application UI"}
        subtitle={
          "Form layouts, tables, dialogs — everything you need to build beautiful responsive web applications."
        }
      />
      <ApplicationShells shells={applicationUI?.shells} />
      <Headings data={applicationUI?.headingSection} />
      <DataDisplay data={applicationUI?.dataDisplay} />
      <Lists data={applicationUI?.lists} />
      <Forms data={applicationUI?.forms} />
      <Feedback data={applicationUI?.feedbacks} />
      <Navigation data={applicationUI?.navigation} />
      <Overlays data={applicationUI?.overlays} />
      <Elements data={applicationUI?.elements} />
      <Layout data={applicationUI?.layouts} />
      <PageExamples data={applicationUI?.pageExamples} />
      {/* <PageExamples data={applicationUI?.headingSection} /> */}
    </div>
  );
};

export default ApplicationUI;

import ApplicationUI from "./components/ApplicationUI";
import Ecommerce from "./components/Ecommerce";
import Marketings from "./components/Marketings";
import Navigation from "./components/Navigation";

const Components = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto">
        <Marketings />
        <ApplicationUI />
        <Ecommerce />
      </div>
    </div>
  );
};

export default Components;

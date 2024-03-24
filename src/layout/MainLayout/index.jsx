import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

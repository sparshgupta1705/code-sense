import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
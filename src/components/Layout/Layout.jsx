import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
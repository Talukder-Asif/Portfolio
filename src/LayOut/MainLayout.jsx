import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
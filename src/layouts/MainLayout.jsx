import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import { NavbarWithMegaMenu } from "../shared/Navbar";


const MainLayout = () => {
    return (
       <div>
        <NavbarWithMegaMenu></NavbarWithMegaMenu>
        <Outlet></Outlet>
        
       </div>
    )
};

export default MainLayout;
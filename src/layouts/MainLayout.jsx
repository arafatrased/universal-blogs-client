import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../shared/Navbar";
import toast, { Toaster } from 'react-hot-toast';
import { Footer } from "../shared/Footer";


const MainLayout = () => {
    return (
       <div>
        <NavbarWithMegaMenu></NavbarWithMegaMenu>
        <Outlet></Outlet>


        <Toaster />
        <hr />
        <Footer></Footer>
       </div>
    )
};

export default MainLayout;
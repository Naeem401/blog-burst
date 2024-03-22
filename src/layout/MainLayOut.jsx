import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const MainLayOut = () => {
    return (
        <div>
             <div className='h-16'>
            <NavBar/>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet/>
            </div>
           
            <Footer/>
        </div>
    );
};

export default MainLayOut;
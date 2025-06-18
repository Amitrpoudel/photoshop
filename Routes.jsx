import {Route, Routes} from "react-router-dom";


import Banner from "./Banner";
import ContactUs from "./Contactus";
import FlashOverlay from "./Services";
import Services from "./Services";



function AppRoute(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Banner/>}></Route>
            <Route path="/service" element={<Services/>}></Route>
            <Route path="/contact" element={<ContactUs/>}></Route>
        </Routes>
        </>
    )
}

export default AppRoute
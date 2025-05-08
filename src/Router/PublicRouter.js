import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Component/Banner/Banner";
import BannerSection from "../Component/BannerSection/BannerSection";
import AboutUs from "../Component/AboutUs/AboutUs";
import ProjectSection from "../Component/ProjectSection/ProjectSection";
import Video from "../Component/Videos/Video";
import Review from "../Component/Review/Review";
import ProductServices from "../Component/ProductServices/ProductServices";
import WhySolar from "../Component/WhySolor/WhySolar";
import ServiceArea from "../Component/ServiceArea/ServiceArea";
import Home from "../Home/Home";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import InquresNow from "../Component/InquresNow/InquresNow";
import SubCategori from "../Component/SubCategori/SubCategori";
import Refrensh from "../Screen/Refrensh/Refrensh";
import Award from "../Screen/Award/Award";
import News from "../Screen/News/News";
import Events from "../Screen/Events/Events";
import ContactUs from "../Screen/Contactus/ContactUs";

export default function PublicRouter() {
    const location = useLocation();
    return (
        <>
            <Header />
            <Routes>
                <Route path="banner" element={<Banner />} />
                <Route path="bannersection" element={<BannerSection />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="projectsection" element={<ProjectSection />} />
                <Route path="video" element={<Video />} />
                <Route path="review" element={<Review />} />
                <Route path="ProductServices" element={<ProductServices />} />
                <Route path="whysolar" element={<WhySolar />} />
                <Route path="servicearea" element={<ServiceArea />} />
                <Route path="/" element={<Home />} />
                <Route path="ProductDetails" element={<ProductDetails />} />
                <Route path="inquresnow" element={<InquresNow />} />
                <Route path="refrensh" element={<Refrensh />} />
                <Route path="award" element={<Award />} />
                <Route path="news" element={<News />} />
                <Route path="events" element={<Events />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="subcategori" element={<SubCategori key={location.search} />} />
            </Routes>
            <Footer />

        </>
    );
}

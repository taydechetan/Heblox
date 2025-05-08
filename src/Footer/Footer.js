import React from "react";
import "./footer.css";
import {
    FaArrowRightLong,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    const categories = [
        {
            parent: "Solar Combos",
            children: [
                "Standalone kits",
                "Grounmount",
                "Wallmount",
                "Rooftops",
                "Balcony",
            ],
        },
        {
            parent: "Solar Modules",
            children: ["PV modules"],
        },
        {
            parent: "Solar Invertors",
            children: ["Ongrid Invertors"],
        },
        {
            parent: "Energy Storage",
            children: ["Li-on Batteries"],
        },
        {
            parent: "Roofs & Facades",
            children: ["Glass Modules", "Metal Modules"],
        },
    ];

    const handleParentClick = (parent, children) => {
        if (!children || children.length === 0) return;
        const firstChild = children[0];
        navigate(
            `/subcategori?parent=${encodeURIComponent(
                parent
            )}&child=${encodeURIComponent(firstChild)}`
        );
    };

    return (
        <div className="footer_outer">
            <footer className="footer_container">
                <div className="footer_inner_container">
                    <div className="footer_middle py-5">
                        <div className="footer_row gy-4">
                            <div className="footer_col col-12 col-md-6 col-lg-4">
                                <h4 className="footer_title">Subscribe Now</h4>
                                <p className="footer_desc mt-4 mb-4">
                                    Latest news, AI Models & Fun Memes From <br />
                                    The Communities. Latest News, the of <br />
                                    the community.
                                </p>
                                <form className="footer_subscribe_form d-flex">
                                    <input
                                        type="email"
                                        className="footer_input"
                                        placeholder="Your email.."
                                    />
                                    <button type="submit" className="footer_sendButton">
                                        <IoIosSend />
                                    </button>
                                </form>
                            </div>

                            <div className="footer_col col-6 col-md-6 col-lg-2">
                                <h4 className="footer_title">Our Products</h4>
                                <ul className="footer_links">
                                    {/* <li>
                                        <a href="subcategori">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Solar Combos</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Solar Modules</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Solar Invertors</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Hydropower Plants</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Energy Storage</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Roofs & Facades</span>
                                        </a>
                                    </li> */}

                                    {categories.map((category) => (
                                        <li className="nav-item dropdown" key={category.parent}>
                                            <a
                                                className="nav-link d-flex align-items-center  nav-text-white"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleParentClick(category.parent, category.children);
                                                }}
                                            >
                                                <FaArrowRightLong className="footer_hover_icon" />  {category.parent}
                                            </a>

                                            <ul className="dropdown-menu">
                                                {category.children.map((child) => (
                                                    <li key={child}>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleParentClick(
                                                                    category.parent,
                                                                    category.children
                                                                );
                                                            }}
                                                        >
                                                            {child}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* second content */}

                            <div className="footer_col col-6 col-md-6 col-lg-2">
                                <h4 className="footer_title">Useful Links</h4>
                                <ul className="footer_links">
                                    <li>
                                        <a href="aboutus">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>About Us</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="servicearea">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Visit Stores</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Our Services</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="news">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>News</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="award">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Awards</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contactus">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Contact</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer_col col-6 col-md-6 col-lg-2">
                                <h4 className="footer_title">Other Pages</h4>
                                <ul className="footer_links">
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Terms & Conditions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Tax & Vat</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Refund Policy</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Typically Solutions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaArrowRightLong className="footer_hover_icon" />{" "}
                                            <span>Our Process</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="footer_divider" />

                    <div className="footer_bottom">
                        <div className="footer_bottom_row align-items-center">
                            <div className="footer_bottom_col col-md-6 text-center text-md-start mb-3 mb-md-0">
                                <p className="footer_desc small">
                                    Copyright © 2025 Heblox | All Rights Reserved | Designed by
                                    DigiVend
                                </p>
                            </div>

                            <div className="footer_bottom_col col-md-6 d-flex justify-content-center justify-content-md-end">
                                <div className="footer_social_icons d-flex gap-3">
                                    <a href="https://www.facebook.com/">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://in.linkedin.com/">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://github.com/">
                                        <FaYoutube />
                                    </a>
                                    <a href="https://x.com/?lang=en">
                                        <RiTwitterXFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

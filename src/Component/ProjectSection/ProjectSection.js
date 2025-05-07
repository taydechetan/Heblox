import React from "react";
import Image1 from "../../Assets/Images/product-1.png";
import Image2 from "../../Assets/Images/product-2.png";
import Image3 from "../../Assets/Images/product-3.png";
import Image4 from "../../Assets/Images/product-4.png";
import "./ProjectSection.css";
import { FaEye } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ProjectSection() {
    const navigate = useNavigate();

    const handlopenenqury = () => {
        navigate('/inquresnow')
    }


    const products = [
        {
            img: Image1,
            alt: "Solar panel",
            title: "Loom Solar 10 Wp, 12 V PV Module for Mobile Charging",
        },
        {
            img: Image2,
            alt: "Loom Solar Panel",
            title:
                "Loom Solar 20 Wp, 12 V PV Module for Small Battery Charging & DIY Projects",
        },
        {
            img: Image3,
            alt: "Loom Solar Panel",
            title: "Loom Solar Panel - SHARK 600 Wp | N-Type TOPCon Bifacial 16BB",
        },
        {
            img: Image4,
            alt: "SHARK 730~750",
            title: "SHARK 730~750 Wp HJT Dual-Glass Solar Panel (Pack of 33)",
        },
    ];

    return (
        <div>
            <section className="product-services-sec section_paddingY">
                <div className="container">
                    <div className="row">
                        <div className="heading_wrapper mb-md-4 mb-3 text-center">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    marginTop: "25px"
                                }}
                            >
                                <h4
                                    // className="subtitle"
                                    style={{ margin: 0, color: "#1a4578" }}
                                >
                                    PRODUCT
                                </h4>
                                <div
                                    style={{
                                        width: "100px",
                                        height: "1px",
                                        backgroundColor: "#1a4578",
                                    }}
                                ></div>
                            </div>
                            <h2 className="mt-2">Our Products</h2>
                        </div>
                    </div>

                    <div className="row product_row">
                        {products.map((product, index) => (
                            <div key={index} className="col-md-3 product_item">
                                <div className="product-item">
                                    <div className="product-thumb">
                                        <img src={product.img} alt={product.alt} />
                                    </div>
                                    <div className="product-content">
                                        <h4>{product.title}</h4>
                                    </div>
                                    <div className="product-buttons">
                                        <a href="ProductDetails" className="btn btn-view eye-icon-wrapper">
                                            <span className="eye-icon">
                                                <FaEye />
                                            </span>
                                        </a>

                                        <button className="EnquiryNow" onClick={handlopenenqury}>
                                            Enquiry Now
                                            <i className="ri-send-plane-fill">
                                                {" "}
                                                <IoIosSend />
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};




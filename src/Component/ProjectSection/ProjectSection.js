import React, { useEffect, useState } from "react";
import Image1 from "../../Assets/Images/product-1.png";
import Image2 from "../../Assets/Images/product-2.png";
import Image3 from "../../Assets/Images/product-3.png";
import Image4 from "../../Assets/Images/product-4.png";
import "./ProjectSection.css";
import { FaEye } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { apiCallNew } from "../../Network_Call/apiservices";
import ApiEndPoints from "../../Network_Call/ApiEndPoints";
import image from "../../Assets/Images/image_12323913.png";

export default function ProjectSection() {
    const [productdata, setProductsdata] = useState([]);

    console.log("productdata???", productdata);

    const navigate = useNavigate();

    const handlopenenqury = (id) => {
        navigate("/inquresnow", { state: { id: id } });
    };

    const Products = async () => {
        try {
            const response = await apiCallNew(
                "get",
                null,
                ApiEndPoints.HomePageProducts
            );
            if (response && response.status === 200) {
                setProductsdata(response.data);
                console.log("Productsdata", response);
            } else {
                console.log("error", response);
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        Products();
    }, []);

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
                                    marginTop: "25px",
                                }}
                            >
                                <h4 style={{ margin: 0, color: "#1a4578" }}>PRODUCT</h4>
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
                        {productdata.map((product, index) => (
                            <div key={index} className="col-md-3 product_item">
                                <div className="product-item">
                                    <div className="product-thumb">
                                        <img src={product.img} alt={product.alt} />
                                    </div>
                                    <div className="product-content">
                                        <h4>{product?.name}</h4>
                                        <h4>{product?.description}</h4>
                                        {/* <p>{product?.short_desc}</p> */}
                                    </div>
                                    <div className="product-buttons">
                                        <a
                                            href={`/ProductDetails/${product?.slug}`}
                                            className="btn btn-view eye-icon-wrapper"
                                        >
                                            <span className="eye-icon">
                                                <FaEye />
                                            </span>
                                        </a>

                                        <button
                                            className="EnquiryNow"
                                            onClick={() => handlopenenqury(product?.id)}
                                        >
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
}

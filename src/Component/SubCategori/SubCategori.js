import React, { useEffect, useState } from "react";
import "./subcategori.css";
import { FaEye } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import WhySolar from "../WhySolor/WhySolar";
import ServiceArea from "../ServiceArea/ServiceArea";
import Review from "../Review/Review";
import image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";
import ApiEndPoints from "../../Network_Call/ApiEndPoints";
import { apiCallNew } from "../../Network_Call/apiservices";
import { PulseLoader } from "react-spinners";

export default function ProjectSection() {
    const [ProDucts, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const parent = query.get("parent");
    const child = query.get("child");

    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const baseUrl = "https://heblox.aercjbp.com/ap-admin/public/uploads/product/";

    const Prodcutss = async (id) => {
        try {
            setLoad(true);
            const response = await apiCallNew(
                "get",
                null,
                ApiEndPoints.ProductByCategory + id
            );
            if (response && response.status === 200) {
                setLoad(false);
                setProducts(response.data);
            } else {
                setLoad(false);
                console.log("error", response);
            }
        } catch (error) {
            setLoad(false);
            console.log("error", error);
        }
    };

    useEffect(() => {
        if (id) {
            Prodcutss(id);
        }
    }, [id]);

    const handlopenenqury = (id) => {
        // navigate("/inquresnow");
        navigate("/inquresnow", { state: { id } });
    };

    return (
        <>
            <div>
                <section className="custom-banner-section">
                    <div className="custom-side-icons">
                        <a href="refrensh" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image1} alt="social-icon" />
                            </div>
                            <span className="custom-label">References</span>
                        </a>
                        <a href="ProductServices" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image2} alt="social-icon" />
                            </div>
                            <span className="custom-label">Bulk Enquiries</span>
                        </a>
                        <a href="servicearea" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image3} alt="social-icon" />
                            </div>
                            <span className="custom-label">Visit Stores</span>
                        </a>
                        <a href="#!" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image4} alt="social-icon" />
                            </div>
                            <span className="custom-label">Dealers</span>
                        </a>
                        <a href="award" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image5} alt="social-icon" />
                            </div>
                            <span className="custom-label">Awards</span>
                        </a>
                        <a href="events" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image6} alt="social-icon" />
                            </div>
                            <span className="custom-label">Events</span>
                        </a>
                        <a href="news" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image6} alt="social-icon" />
                            </div>
                            <span className="custom-label">News</span>
                        </a>
                    </div>
                </section>
            </div>
            <div>
                <section className="product-services-sec section_paddingY">
                    <div className="container">
                        <div className="row">
                            <div className="heading_wrapper mb-md-4 mb-3 text-center">
                                <div className="subcontentsd">
                                    {parent?.trim() && (
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "7px",
                                                marginTop: "25px",
                                            }}
                                        >
                                            <h4 style={{ margin: 0, color: "#1a4578" }}>{parent}</h4>
                                            <div
                                                style={{
                                                    width: "100px",
                                                    height: "1px",
                                                    backgroundColor: "#1a4578",
                                                }}
                                            ></div>
                                        </div>
                                    )}

                                    <h3
                                        className="mt-2"
                                        style={{
                                            marginTop: "10px",
                                            color: "#000",
                                        }}
                                    >
                                        {child}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {console.log("ProDucts", ProDucts)}

                        {/* <div className="row product_row  mb-4">
                            {load && (
                                <div>
                                    <PulseLoader
                                        loading={load}
                                        color="#3C4DFE"
                                        className="backdrop"
                                    />
                                </div>
                            )}
                            {ProDucts.map((product, index) => (
                                <div key={index} className="col-md-3 product_item">
                                    <div className="product-item">
                                        {console.log(
                                            "???",
                                            product?.product_images?.[0]?.product_image
                                        )}
                                        <div className="product-thumb">
                                            <img
                                                src={product?.product_images?.[0]?.product_image}
                                                alt={product?.alt || "Product Image"}
                                            />
                                        </div>

                                        <div className="product-content">
                                            <h5>{product?.name}</h5>
                                            <p>{product?.slug}</p>

                                            <h4>{product?.description?.replace(/<[^>]+>/g, "")}</h4>
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

                                            <button className="EnquiryNow" onClick={handlopenenqury}>
                                                Inquiry Now
                                                <i className="ri-send-plane-fill">
                                                    {" "}
                                                    <IoIosSend />
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        <div className="row product_row mb-4">
                            {load ? (
                                <div>
                                    <PulseLoader
                                        loading={load}
                                        color="#3C4DFE"
                                        className="backdrop"
                                    />
                                </div>
                            ) : ProDucts.length === 0 ? (
                                <div className="col-12 text-center">
                                    <p>Product Is Empty</p>
                                </div>
                            ) : (
                                ProDucts.map((product, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 product_item">
                                        <div className="product-item">
                                            {console.log(
                                                "???",
                                                product?.product_images?.[0]?.product_image
                                            )}
                                            <div className="product-thumb">
                                                <img
                                                    // src={product?.product_images?.[0]?.product_image}   
                                                    src={`${baseUrl}${product?.product_images?.[0]?.product_image}`}
                                                    alt={product?.alt || "Product Image"}
                                                />
                                            </div>

                                            <div className="product-content">
                                                <h5>{product?.name}</h5>
                                                <p>{product?.slug}</p>
                                                <h4>{product?.description?.replace(/<[^>]+>/g, "")}</h4>
                                                <p>{product?.id}</p>
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

                                                <button className="EnquiryNow" onClick={() => handlopenenqury(product?.id)}>
                                                    Inquiry Now
                                                    <i className="ri-send-plane-fill">
                                                        {" "}
                                                        <IoIosSend />
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <WhySolar />
            <ServiceArea />
            <Review />
        </>
    );
}

import React, { useEffect, useRef, useState } from "react";
import {
    Button,
    Card,
    Container,
    Row,
    Col,
    Image,
    Form,
} from "react-bootstrap";
import "./ProductDetails.css";
import image1 from "../../Assets/Images/product-1.png";
import Image2 from "../../Assets/Images/product-2.png";
import WhySolar from "../WhySolor/WhySolar";
import ServiceArea from "../ServiceArea/ServiceArea";
import Review from "../Review/Review";
import { useNavigate, useParams } from "react-router-dom";
import Image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";
import { apiCallNew } from "../../Network_Call/apiservices";
import ApiEndPoints from "../../Network_Call/ApiEndPoints";
import { PulseLoader } from "react-spinners";

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState([]);
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();

    console.log("productDetails", productDetails)

    const { slug } = useParams();
    console.log("slug", slug);

    const GetProductDetails = async (slug) => {
        try {
            setLoad(true);
            const response = await apiCallNew("get", null, ApiEndPoints.ProductsByid + slug);
            if (response && response.status === 200) {
                setLoad(false);
                setProductDetails(response.data);
                console.log("response", response);
            } else {
                setLoad(false);
                console.log("error", response?.msg || "Unexpected error");
            }
        } catch (error) {
            setLoad(false);
            console.log("error", error);
        }
    };

    useEffect(() => {
        GetProductDetails(slug);
    }, [slug])

    const handlopenenqury = (id) => {
        navigate('/inquresnow', { state: { id: id } })
    }

    const mainImageRef = useRef(null);

    const handleThumbnailClick = (imgUrl) => {
        if (mainImageRef.current) {
            mainImageRef.current.src = imgUrl;
        }
    };

    const baseUrl = "https://heblox.aercjbp.com/ap-admin/public/uploads/product/";
    const defaultImage = `${baseUrl}${productDetails?.product_images?.[0]?.product_image}`;


    return (
        <>
            {load && (
                <div>
                    <PulseLoader loading={load} color="#3C4DFE" className="backdrop" />
                </div>
            )}
            <div>
                <section
                    className="custom-banner-section"
                >
                    <div className="custom-side-icons">
                        <a href="refrensh" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={Image1} alt="social-icon" />
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


            {/* <Container className="toughx-container py-5">
                <Row>
                    <Col md={5} className="toughx-image-section text-center mb-4 mb-md-0">
                        <Image
                            src={Image2}
                            alt="ToughX Trolley"
                            fluid
                            className="toughx-main-image"
                        />
                        <div className="toughx-thumbnail mt-3">
                            <Image src={image1} alt="Thumbnail" width={40} />
                            <Image src={Image2} alt="Thumbnail" width={40} />
                        </div>
                    </Col>
                    <Col md={7} className="toughx-details">
                        <h2 className="toughx-title">ToughX trolley TX100L</h2>
                        <h4 className="toughx-price">
                            ₹ 1,700.00{" "}
                            <small className="text-muted">(Inclusive of all taxes)</small>
                        </h4>
                        <p className="toughx-finance">
                            Buy in 3/6 monthly payments above ₹10000
                        </p>
                        <p>
                            For more details, visit the <strong>Warranty</strong> section under{" "}
                            <strong>Specifications</strong>.
                        </p>
                        <p>
                            Loom Solar 10 Wp, 12 V PV Module for Mobile Charging and yet
                            pleasing to the eye. It surely is the very best accessory for your
                            Luminous UPS set.
                        </p>

                        <div className="toughx-buttons mt-4 d-flex gap-3">
                            <button className="InqureBtn" onClick={handlopenenqury}>
                                Inquire Now
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container> */}

            <Container className="toughx-container py-5">

                {/* {productDetails?.map((item) => (
                    <Row key={item.id}>
                        <Col md={5} className="toughx-image-section text-center mb-4 mb-md-0">
                            <Image
                                src={item.mainImage}
                                alt="ToughX Trolley"
                                fluid
                                className="toughx-main-image"
                            />
                            <div className="toughx-thumbnail mt-3">
                                {item.thumbnails.map((thumb, idx) => (
                                    <Image key={idx} src={thumb} alt="Thumbnail" width={40} />
                                ))}
                            </div>
                        </Col>
                        <Col md={7} className="toughx-details">
                            <h2 className="toughx-title">{item.title}</h2>
                            <h4 className="toughx-price">
                                {item.price}{" "}
                                <small className="text-muted">{item.note}</small>
                            </h4>
                            <p className="toughx-finance">{item.finance}</p>
                            <p>
                                {item.description1}
                                <strong>Warranty</strong> section under <strong>Specifications</strong>.
                            </p>
                            <p>{item.description2}</p>

                            <div className="toughx-buttons mt-4 d-flex gap-3">
                                <button className="InqureBtn" onClick={handlopenenqury}>
                                    Inquire Now
                                </button>
                            </div>
                        </Col>
                    </Row>
                ))} */}

                {productDetails && (
                    <Row key={productDetails.id}>
                        <Col md={5} className="toughx-image-section text-center mb-4 mb-md-0">
                            <Image
                                // src={`https://heblox.aercjbp.com/ap-admin/public/uploads/product/${productDetails?.product_images?.[0]?.product_image}`}
                                src={defaultImage}
                                alt="ToughX Trolley"
                                fluid
                                className="toughx-main-image"
                            />
                            <div className="toughx-thumbnail mt-3 d-flex justify-content-center flex-wrap gap-2">
                                {productDetails?.product_images?.map((thumb, idx) => {
                                    const imageUrl = `${baseUrl}${thumb?.product_image}`;
                                    return (
                                        <Image
                                            key={idx}
                                            src={imageUrl}
                                            alt={`Thumbnail ${idx}`}
                                            width={60}
                                            onClick={() => handleThumbnailClick(imageUrl)}
                                            style={{ cursor: "pointer", border: "1px solid #ccc", borderRadius: 4 }}
                                        />
                                    );
                                })}
                            </div>
                            {/* <div className="toughx-thumbnail mt-3">
                                {productDetails.product_images?.map((thumb, idx) => (
                                    <Image key={idx} src={thumb} alt="Thumbnail" width={40} />
                                ))}
                            </div> */}
                        </Col>
                        <Col md={7} className="toughx-details">
                            <h2 className="toughx-title">{productDetails.name}</h2>
                            <h4 className="toughx-price">
                                {productDetails.slug}{" "}
                            </h4>
                            <p className="toughx-finance">{productDetails.sku}</p>
                            <p>
                                {productDetails.short_desc}
                            </p>
                            <p>{productDetails.description?.replace(/<[^>]+>/g, '')}</p>

                            <div className="toughx-buttons mt-4 d-flex gap-3">
                                <button className="InqureBtn" onClick={() => handlopenenqury(productDetails?.id)}>
                                    Inquire Now
                                </button>
                            </div>
                        </Col>
                    </Row>
                )}

            </Container>

            <WhySolar />
            <ServiceArea />
            <Review />
        </>
    );
};

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./InquresNow.css";
import Image from "../../Assets/Images/product-1.png";
import Review from "../Review/Review";
import WhySolar from "../WhySolor/WhySolar";
import image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";
import { apiCallNew } from "../../Network_Call/apiservices";
import ApiEndPoints from "../../Network_Call/ApiEndPoints";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import axios from "axios";

const InquresNow = () => {
  const [load, setLoad] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [formDatas, setFormDatas] = useState({
    name: "",
    email: "",
    message: "",
    appointment_date: "",
    pincode: "",
    address: "",
    phone: "",
    product_id: "",
  });

  const location = useLocation();
  const productId = location.state?.id;

  console.log("productId", productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const handelclicks = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("product_id", productId);
  //   formData.append("name", name);
  //   formData.append("email", email);
  //   formData.append("phone", phone);
  //   formData.append("message", description);
  //   formData.append("address", address);
  //   formData.append("pincode", pincode);
  //   formData.append("appointment_date", appoinmentDate);

  //   try {
  //     setLoad(true);
  //     if (!email || !name || !phone || !address || !pincode || !appoinmentDate || !description) {
  //       toast.error('Please Fill All Fillds');
  //       return;
  //     }

  //     if (!isChecked) {
  //       toast.error('Please Click The Check Box');
  //       return;
  //     }

  //     const response = await apiCallNew("post", formData, ApiEndPoints.CreateEnquiry);
  //     if (response && response.status === 200) {
  //       setLoad(false);
  //       toast.success(response.msg);
  //       console.log("response", response);
  //     } else {
  //       setLoad(false);
  //       toast.error(response.message);
  //       console.log("error", response);
  //     }
  //   } catch (error) {
  //     setLoad(false)
  //     toast.error(error.message)
  //     console.log("error", error);
  //   }
  // }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDatas({
      ...formDatas,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const response = await axios.post('https://heblox.aercjbp.com:3003/api/create-enquiry', {
        email: formDatas.email,
        name: formDatas.name,
        phone: formDatas.phone,
        product_id: productId,
        appointment_date: formDatas.appointment_date,
        pincode: formDatas.pincode,
        address: formDatas.address,
        message: formDatas.message,
      });
      if (response && response.status === 200) {
        setLoad(false);
        toast.success(response.data.msg);
        console.log("response", response);
      } else {
        setLoad(false);
        toast.error(response.message || "Something went wrong");
        console.log("error", response.message);
      }
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };



  return (
    <>
      <div>
        <section
          className="custom-banner-section"
        >
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
      <div className="solar-main-wrapper py-5 px-3">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="solar-left-section  mb-4 mb-lg-0">
              <h1>
                Switch to <span style={{ color: "#1a4578" }}>Solar</span> in India,{" "}
                <br />
                You'll love the savings.
              </h1>
              <p className="mt-3">
                Thousands of families in India trust our rooftop solar
                solutions
              </p>
              <div className="solar-image-box mt-4 rounded">
                <img
                  src={Image}
                  alt="Solar Team"
                  className="img-fluid rounded"
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="solar-form-box bg-white p-4 rounded shadow-sm">
                <h5 className="fw-bold">Book a FREE Solar Consultation</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={formDatas.name}
                      onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      WhatsApp number <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="phone"
                      placeholder="Enter WhatsApp Number"
                      value={formDatas.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Pin code <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="number"
                      name="pincode"
                      placeholder="Enter pin code"
                      value={formDatas.pincode}
                      onChange={handleInputChange} />

                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Email-id<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="email"
                      name="email"
                      placeholder="Enter E-Mail ID"
                      value={formDatas.email}
                      onChange={handleInputChange} />

                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Address<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="address"
                      name="address"
                      placeholder="Enter Address"
                      value={formDatas.address}
                      onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Appoinment Date<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="date"
                      name="appointment_date"
                      placeholder="Enter Appoinment Date"
                      value={formDatas.appointment_date}
                      onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Description<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter description"
                      name="message"
                      value={formDatas.message}
                      onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group className="mb-3 form-check">
                    <Form.Check
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      label={
                        <>
                          I agree to SolarSquare's{" "}
                          <a href="#">terms of service</a> &{" "}
                          <a href="#">privacy policy</a>
                        </>
                      }
                    />
                  </Form.Group>
                  <div className="Ghsnow" >
                    <button type="submit" className="Btnss">Inqury Now</button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <WhySolar />
      <Review />
    </>
  );
};

export default InquresNow;

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

const InquresNow = () => {

  const [load, setLoad] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [appoinmentDate, setAppoinmentdate] = useState('');
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  console.log("???", name)

  const location = useLocation();
  const productId = location.state?.id;

  console.log("productId", productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handelclicks = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      // if (!email || !name || !phone || !address || !pincode || !appoinmentDate || !description) {
      //   toast.error('Please Fill All Fillds');
      //   return;
      // }

      // if (!isChecked) {
      //   toast.error('Please Click The Check Box');
      //   return;
      // }

      const payload = {
        "product_id": productId,
        "Name": name,
        "email": email,
        "phone": phone,
        "message": description,
        "address": address,
        "pincode": pincode,
        "appointment_date": appoinmentDate,
      }

      const response = await apiCallNew("post", payload, ApiEndPoints.CreateEnquiry);
      if (response && response.status === 200) {
        setLoad(false);
        toast.success(response.msg);
        console.log("response", response);
      } else {
        setLoad(false);
        toast.error(response.message);
        console.log("error", response);
      }
    } catch (error) {
      setLoad(false)
      toast.error(error.message)
      console.log("error", error);
    }
  }


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
                <Form onSubmit={handelclicks}>
                  {/* <Form.Group className="mb-3">
                    <Form.Label>
                      Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter  Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                  </Form.Group> */}

                  <Form.Group className="mb-3">
                    <Form.Label>
                      WhatsApp number <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter WhatsApp Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Pin code <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="number" placeholder="Enter pin code"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Email-id<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter E-Mail ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Address<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="address" placeholder="Enter Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Appoinment Date<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="date" placeholder="Enter Appoinment Date"
                      value={appoinmentDate}
                      onChange={(e) => setAppoinmentdate(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Description<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
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
                  <div className="Ghsnow">
                    <button className="Btnss">Inqury Now</button>
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

import React from "react";
import "./Review.css";
import { FaGoogle, FaStar } from "react-icons/fa";

export default function Review() {
    return (
        <div>
            <section class="testimonial-sec section_paddingY">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-md-12">
                            <div class="testimonial-2-content text-center">
                                <div class="testimonial-2-title-box">
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "10px",
                                            marginTop: "25px",
                                        }}
                                    >
                                        <h5 style={{ margin: 0, color: "#1a4578" }}>
                                            CLIENT REVIEW
                                        </h5>
                                        <div
                                            style={{
                                                width: "100px",
                                                height: "1px",
                                                backgroundColor: "#1a4578",
                                            }}
                                        ></div>
                                    </div>
                                    {/* <h4 class="subtitle">client review</h4> */}
                                    <h3 class="section-title mt-2">
                                        Read our success story to find the
                                        <span style={{ color: "#1a4578" }} className="ms-2">
                                            happiness
                                        </span>
                                    </h3>
                                    <p class="descs">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam
                                    </p>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-6 mb-20">
                                        <div className="testimonial-review-box  mb-4">
                                            <div class="testimonial-review-iocn">
                                                <span>
                                                    <i class="ri-google-fill">
                                                        <FaGoogle />
                                                    </i>
                                                </span>
                                            </div>

                                            <div class="testimonial-review-content">
                                                <span>Google Review</span>
                                                <div class="testimonial-ratting">
                                                    <i class="ri-star-fill">
                                                        <FaStar />{" "}
                                                    </i>
                                                    <i class="ri-star-fill">
                                                        <FaStar />{" "}
                                                    </i>
                                                    <i class="ri-star-fill">
                                                        <FaStar />{" "}
                                                    </i>
                                                    <i class="ri-star-fill">
                                                        <FaStar />{" "}
                                                    </i>
                                                    <i class="ri-star-fill">
                                                        <FaStar />{" "}
                                                    </i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

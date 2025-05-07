import React from "react";
import "./AboutUs.css";
import Aboutusimg from "../../Assets/Images/about.png";
import Vectoreimg from "../../Assets/Images/Vector.png";
import { FiArrowUpRight } from "react-icons/fi";
import Home from "../../Home/Home";

export default function AboutUs() {
    return (
        <>
            <section class="about_section section_paddingY">
                <div class="container">
                    <div class="row" style={{ padding: "30px" }}>
                        <div class="col-md-7">
                            <div class="about_content">
                                <div class="heading_wrapper mb-md-4 mb-3">
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            marginTop: "25px",
                                        }}
                                    >
                                        <h4 style={{ margin: 0, color: "#1a4578" }}>ABOUT US</h4>
                                        <div
                                            style={{
                                                width: "100px",
                                                height: "1px",
                                                backgroundColor: "#1a4578",
                                            }}
                                        ></div>
                                    </div>
                                    <h2 class="abouts_heading mt-3">
                                        Solar Power: Shining a Light on a Greener Tomorrow
                                    </h2>
                                </div>
                                <p className="offers">
                                    Heblox offers end to end solar energy solutions from design to
                                    sourcing to installation, with more than 20 years of combined
                                    experience we are capable of executing all type of small & large
                                    scale roof tops, ground mount, residential and commercial solar
                                    power plants.
                                </p>
                                <p className="offers">
                                    Heblox offers end to end solar energy solutions from design to
                                    sourcing to installation, with more than 20 years of combined
                                    experience we are capable of executing all type of small & large
                                    scale roof tops, ground mount, residential and commercial solar
                                    power plants.

                                </p>
                                <button className="AboutBtn">
                                    About More <FiArrowUpRight />
                                </button>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="about_image_wrapper">
                                <div class="dots">
                                    <img src={Vectoreimg} alt="img" />
                                </div>
                                <div class="about_image">
                                    <img src={Aboutusimg} alt="about" />
                                    <div class="experienve_wrapper">
                                        <h5>25</h5>
                                        <p>Years Of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Home />
        </>
    );
}





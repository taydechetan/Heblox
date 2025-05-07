import React from "react";
import video from "../../Assets/Images/video-1.mp4";
import "./Video.css";
import { FiArrowUpRight } from "react-icons/fi";

export default function Video() {
    const videos = [video];
    return (
        <section className="v_section section_paddingY">
            <div className="container">
                <div className="row">
                    <div className="heading_wrapper text-center pb-md-3">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                            }}
                        >
                            <h4 style={{ margin: 0, color: "#1a4578" }}>SHORT VIDEO</h4>
                            <div
                                className="ms-2"
                                style={{
                                    width: "100px",
                                    height: "1px",
                                    backgroundColor: "#1a4578",
                                }}
                            ></div>
                        </div>

                        <h2 className="section_heading mt-2">Installation Video</h2>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        {videos.map((videoSrc, index) => (
                            <div key={index} style={{ marginBottom: "30px" }}>
                                <video controls class="installation_video" id="main_video">
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="row justify-content-center pt-md-5 pt-3">
                    <div class="col-md-4 text-center">
                        <a href="#" className="AllvideoBtn  mb-4">
                            View All Videos
                            <i className="ri-arrow-right-up-line ms-2 mb-2">
                                <FiArrowUpRight />
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

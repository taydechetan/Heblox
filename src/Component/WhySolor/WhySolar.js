// import React from 'react';
// import "./whysolar.css";

// export default function WhySolar() {
//     return (
//         <section class="why_choose_us_section section_paddingY">
//             <div class="container">
//                 <div class="row justify-content-end">
//                     <div class="col-md-5 ps-md-5">
//                         <div class="why_choose_us">
//                             <h4>Why Choose Solor Power?</h4>
//                             <ul class="whu_choose_us_list">
//                                 <li>
//                                     <h5>Environmental Benefits</h5>
//                                     <p>
//                                         Solar energy reduces greenhouse gas emissions and air pollution compared to fossil fuels, contributing
//                                         to cleaner air and mitigating climate change.
//                                     </p>
//                                 </li>
//                                 <li>
//                                     <h5>Versatility</h5>
//                                     <p>
//                                         Solar panels can be installed on rooftops, ground-mounted arrays, and even integrated into building
//                                         materials, offering flexibility in deployment.
//                                     </p>
//                                 </li>
//                                 <li>
//                                     <h5>Energy Independence</h5>
//                                     <p>
//                                         By generating electricity onsite, solar panels reduce reliance on imported fossil fuels and enhance
//                                         energy security.
//                                     </p>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }


import React from 'react';
import "./whysolar.css";

export default function WhySolar() {
    return (
        <section className="why_choose_us_section_custom">
            <div className="why_choose_wrapper">
                <div className="why_choose_column">
                    <div className="why_choose_us_custom">
                        <h4>Why Choose Solar Power?</h4>
                        <ul className="whu_choose_us_list">
                            <li>
                                <h5>Environmental Benefits</h5>
                                <p>
                                    Solar energy reduces greenhouse gas emissions and air pollution compared to fossil fuels, contributing
                                    to cleaner air and mitigating climate change.
                                </p>
                            </li>
                            <li>
                                <h5>Versatility</h5>
                                <p>
                                    Solar panels can be installed on rooftops, ground-mounted arrays, and even integrated into building
                                    materials, offering flexibility in deployment.
                                </p>
                            </li>
                            <li>
                                <h5>Energy Independence</h5>
                                <p>
                                    By generating electricity onsite, solar panels reduce reliance on imported fossil fuels and enhance
                                    energy security.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

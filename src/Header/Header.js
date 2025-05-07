import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../Assets/Images/logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { apiCallNew } from "../Network_Call/apiservices";
import ApiEndPoints from "../Network_Call/ApiEndPoints";

export default function Header() {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [categories, setCategory] = useState('');

    console.log("data", categories);


    const GetapiResponse = async () => {
        try {
            setLoad(true);
            const response = await apiCallNew("get", null, ApiEndPoints.CategoryList);

            if (response && response.status === 200) {
                setLoad(false);
                setCategory(response?.data)
                // console.log("Data from API:", response.data);
            } else {
                setLoad(false);
                console.error("Error", response);
            }
        } catch (error) {
            setLoad(false);
            console.error("API Error:", error);
        }
    };

    useEffect(() => {
        GetapiResponse();
    }, []);

    const closeNavbar = () => {
        const navbar = document.getElementById("navbarSupportedContent");
        const bsCollapse = new window.bootstrap.Collapse(navbar, {
            toggle: false,
        });
        bsCollapse.hide();
    };



    const handleClick = (parentName, childName) => {
        navigate(
            `/subcategori?parent=${encodeURIComponent(
                parentName
            )}&child=${encodeURIComponent(childName)}`
        );
        closeNavbar();
    };

    const handlopenenqury = (e) => {
        navigate("/inquresnow");
    };

    return (
        <header class="heb_header">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="logo" className="normal_logo" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(" ", "Daily Deals");
                                        closeNavbar();
                                    }}
                                >
                                    Daily Deals
                                </a>
                            </li>


                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link d-flex align-items-center"
                                    href="#"
                                    id="solarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solar Combos <MdKeyboardArrowDown className="btsss" />
                                </a>

                                <ul className="dropdown-menu">
                                    {[
                                        "Standalone kits",
                                        "Grounmount",
                                        "Wallmount",
                                        "Rooftops",
                                        "Balcony",
                                    ].map((item) => (
                                        <li key={item}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick("Solar Combos", item);
                                                    closeNavbar();
                                                }}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {/* <ul className="dropdown-menu" aria-labelledby="solarDropdown">
                                    <li><a className="dropdown-item" href="#">Standalone kits</a></li>
                                    <li><a className="dropdown-item" href="#">Grounmount</a></li>
                                    <li><a className="dropdown-item" href="#">Wallmount</a></li>
                                    <li><a className="dropdown-item" href="#">Rooftops</a></li>
                                    <li><a className="dropdown-item" href="#">Balcony</a></li>
                                </ul> */}
                            </li>

                            <li className="nav-item  dropdown">
                                <a
                                    className="nav-link d-flex align-items-center"
                                    href="#"
                                    id="solarModulesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solar Modules <MdKeyboardArrowDown className="btsss" />
                                </a>
                                <ul className="dropdown-menu">
                                    {["PV modules", "Flexible films", "Solar tiles"].map(
                                        (item) => (
                                            <li key={item}>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleClick("Solar Modules", item);
                                                        closeNavbar();
                                                    }}
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                                {/* <ul className="dropdown-menu" aria-labelledby="solarModulesDropdown">
                                    <li><a className="dropdown-item" href="#">PV modules</a></li>
                                    <li><a className="dropdown-item" href="#">Flexible films</a></li>
                                    <li><a className="dropdown-item" href="#">Solar tiles</a></li>
                                </ul> */}
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link d-flex align-items-center"
                                    href="#"
                                    id="solarInvertersDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solar Invertors <MdKeyboardArrowDown />
                                </a>
                                <ul className="dropdown-menu">
                                    {[
                                        "Ongrid Invertors",
                                        "Hybrid Invertors",
                                        "Micro invertors",
                                    ].map((item) => (
                                        <li key={item}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick("Solar Invertors", item);
                                                    closeNavbar();
                                                }}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {/* <ul className="dropdown-menu" aria-labelledby="solarInvertersDropdown">
                                    <li><a className="dropdown-item" href="#">Ongrid Invertors</a></li>
                                    <li><a className="dropdown-item" href="#">Hybrid Invertors</a></li>
                                    <li><a className="dropdown-item" href="#">Micro invertors</a></li>
                                </ul> */}
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link d-flex align-items-center"
                                    href="#"
                                    id="energyStorageDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Energy Storage <MdKeyboardArrowDown />
                                </a>
                                <ul className="dropdown-menu">
                                    {["Li-on Batteries", "Power Tanks"].map((item) => (
                                        <li key={item}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick("Energy Storage", item);
                                                    closeNavbar();
                                                }}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                {/* <ul className="dropdown-menu" aria-labelledby="energyStorageDropdown">
                                    <li><a className="dropdown-item" href="#">Li-on Batteries</a></li>
                                    <li><a className="dropdown-item" href="#">Power Tanks</a></li>
                                </ul> */}
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link d-flex align-items-center"
                                    href="#"
                                    id="roofsFacadesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Roofs & Facades <MdKeyboardArrowDown />
                                </a>
                                <ul className="dropdown-menu">
                                    {["Glass Modules", "Metal Modules"].map((item) => (
                                        <li key={item}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClick("Roofs & Facades", item);
                                                    closeNavbar();
                                                }}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                {/* <ul className="dropdown-menu" aria-labelledby="roofsFacadesDropdown">
                                    <li><a className="dropdown-item" href="#">Glass Modules</a></li>
                                    <li><a className="dropdown-item" href="#">Metal Modules</a></li>
                                </ul> */}
                            </li>

                            {/* <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solar Modules
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            PV modules
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Flexible films
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Solar tiles
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solar Invertors
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Ongrid Invertors
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Hybrid Invertors
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Micro invertors
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Energy Storage
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Li-on Batteries
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Power Tanks
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Roofs & Facades
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Glass Modules
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Metal Modules
                                        </a>
                                    </li>
                                </ul>
                            </li> */}

                            <li class="ms-md-4"></li>
                            <button
                                className="InqueryButton"
                                type="submit"
                                onClick={handlopenenqury}
                            >
                                Inquire Now
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../Assets/Images/logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { apiCallNew } from "../Network_Call/apiservices";
import ApiEndPoints from "../Network_Call/ApiEndPoints";
import { PulseLoader } from "react-spinners";

export default function Header() {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [categories, setCategory] = useState([]);
    console.log("data", categories)


    const GetapiResponse = async () => {
        try {
            setLoad(true);
            const response = await apiCallNew("get", null, ApiEndPoints.CategoryList);

            if (response && response.status === 200) {
                setLoad(false);
                setCategory(response?.data);
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


    // const Prodcutss = async (id) => {
    //     try {
    //         const response = await apiCallNew("get", null, ApiEndPoints.ProductsByid + id);
    //         if (response && response.status === 200) {
    //             // setProduct(response.data)
    //             console.log("response", response);
    //         } else {
    //             console.log("error", response)
    //         }
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }

    // useEffect(() => {
    //     const id = 10;
    //     Prodcutss(id);
    // }, [])

    // const handleClick = (parentName, childName) => {
    //     navigate(
    //         `/subcategori?parent=${encodeURIComponent(
    //             parentName
    //         )}&child=${encodeURIComponent(childName)}`
    //     );
    //     closeNavbar();
    // };

    const handleClick = (parentName, childName, id) => {
        // navigate(
        //     `/subcategori?parent=${encodeURIComponent(parentName)}&child=${encodeURIComponent(childName)}&id=${encodeURIComponent(id)}`
        // );
        navigate(`/subcategori?parent=${parentName}&child=${childName}&id=${id}`);

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

                    {load && (
                        <div>
                            <PulseLoader loading={load} color="#3C4DFE" className="backdrop" />
                        </div>
                    )}
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
                                        // closeNavbar();
                                    }}
                                >
                                    Daily Deals
                                </a>
                            </li>

                            {Array.isArray(categories) &&
                                categories.map((category) => (
                                    <li key={category.id} className="nav-item dropdown">
                                        {/* {console.log(">>>??", category?.id)} */}
                                        <a
                                            className="nav-link d-flex align-items-center"
                                            href="#"
                                            id={`dropdown-${category.id}`}
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {category.category_name} <MdKeyboardArrowDown className="btsss" />
                                        </a>

                                        <ul className="dropdown-menu" aria-labelledby={`dropdown-${category.id}`}>
                                            {/* {console.log("??", category?.sub_categories)}; */}

                                            {Array.isArray(category.sub_categories) &&
                                                category.sub_categories.map((sub) => (
                                                    <li key={sub.id}>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleClick(category.category_name, sub.category_name, sub.id);
                                                                closeNavbar();
                                                            }}
                                                        >
                                                            {sub.category_name}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                ))}


                            {/* Second Content */}

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
            </nav >
        </header >
    );
}

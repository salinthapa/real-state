import React from "react";
import {FaFacebook, FaInstagramSquare, FaYoutube} from "react-icons/fa"
import "./navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>T</span>hapa
                    <span>R</span>ental
                </h2>
            </div>
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Buy</a>
                    </li>
                    <li>
                        <a href="#">Rent</a>
                    </li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM" target="_thapa"><FaYoutube/></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM" target="_thapa"><FaFacebook/></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM" target="_thapa"><FaInstagramSquare/></a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Navbar
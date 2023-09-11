import React from "react";
import "../../css/App.css";
import { NavLink } from "react-router-dom";

export default function nav(){
    return(
        <>
            <nav>
                <h1>Logo</h1>
                <ul>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "active" : ""} to="./">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="section">Section</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="students">Students</NavLink>
                    </li>
                    <li>
                        <NavLink to="products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
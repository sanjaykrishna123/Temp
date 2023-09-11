import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function productsNav(){
    return(
        <>
            <div className="products-nav">
                <ul>
                    <li>
                        <NavLink to="all">All</NavLink>
                    </li>
                    <li>
                        <NavLink to="fashion">Fashion</NavLink>
                    </li>
                    <li>
                        <NavLink to="electronics">Electronics</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}
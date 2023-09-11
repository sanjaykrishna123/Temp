import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ToDo(){

    const navigate = useNavigate();

    return(
        <>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            
            <h1>Home Page</h1>
            <p onClick={()=> navigate("/section")}>Go to contact page</p>
        </>
    );
}
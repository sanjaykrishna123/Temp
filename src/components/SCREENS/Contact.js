import React from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";

export default function Contact(){
    const [SearchParams, setSearchParams] = useSearchParams();

    const name = SearchParams.get("name");
    return(
        <>
            <Helmet>
                <title>Contact page</title>
            </Helmet>

            <h1>Contact Page</h1>
            <button onClick={()=> setSearchParams({name: "Sanjay"})}>Add</button>
            <button onClick={()=> setSearchParams()}>Remove</button>
            <h3>Name from query is {name}</h3>
        </>
    )
}
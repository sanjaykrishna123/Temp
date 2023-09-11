import React from "react";
import { useParams } from "react-router-dom";

export default function Student(){
    const {name} = useParams();
    return(
        <h1>My Name is {name}</h1>
    )
}
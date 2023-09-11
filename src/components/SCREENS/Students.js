import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Students(){
    const students = [{id: 1, name: "Ageesh"}, {id: 2, name: "Yadhu"}, {id: 3, name: "Arshal"}];
    return(
        <>
            <Helmet>
                <title>Students page</title>
            </Helmet>

           {students.map((student)=> {
                return(
                    <div>
                        <p>{student.name}</p>
                        <NavLink to={`${student.name}`}>View</NavLink>
                    </div>
                )
           })}
        </>
    )
}
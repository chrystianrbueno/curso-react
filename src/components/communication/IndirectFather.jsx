import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default props => {
    const [name, setName] = useState("?");
    const [age, setAge] = useState(0);
    const [nerd, setNerd] = useState(false);

    function getInformation(name, age, nerd) {
        setName(name);
        setAge(age);
        setNerd(nerd);

        console.log(name, age, nerd)
    }

    return (
        <div>
            <span>{name} </span>
            <span>{age} </span>
            <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            <IndirectChild whenClick={getInformation}></IndirectChild>
        </div>
    );
}
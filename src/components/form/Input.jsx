import "./Input.css"
import React, { useState } from "react";

export default props => {
    const [valueField, setValueField] = useState("Inicial");

    const whenChange = (event) => {
        setValueField(event.target.value);
    }

    return (
        <div className="Input">
            <h2>{valueField}</h2>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <input value={valueField} onChange={whenChange} />
                <input value={valueField} readOnly />
                <input value={undefined} />
            </div>
        </div>
    );
}
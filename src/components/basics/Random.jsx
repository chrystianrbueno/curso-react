import React from "react";


export default props => {
    const { min, max } = props;
    const random = parseInt(Math.random() * max - min);
    return (
        <>
            <h1>Valor Aleatório</h1>
            <strong>{random}</strong>
        </>
    )
}

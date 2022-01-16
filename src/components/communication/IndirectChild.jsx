import React from "react";

export default props => {
    const callback = props.whenClick;
    const min = 50;
    const max = 70;
    const RandomAge = () => Math.random() * (20) + min 
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                event => callback("João", RandomAge(), true)
            }>
                Fornecer Informações
            </button>
        </div>
    );
}
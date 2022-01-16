import React from "react";

export default props => {
    const callback = props.whenClick;
    const randomAge = () => parseInt(Math.random() * (20)) + 50;
    const randomNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                event => callback("João", randomAge(), randomNerd())
            }>
                Fornecer Informações
            </button>
        </div>
    );
}
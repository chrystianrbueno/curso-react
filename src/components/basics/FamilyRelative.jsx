import React from "react";

export default props => {
    return (
        <div>
            {props.name} <strong>{props.familyName}</strong>
        </div>
    );
}
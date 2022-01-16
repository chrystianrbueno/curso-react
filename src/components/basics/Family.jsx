import React, { cloneElement } from "react";
import "./FamilyRelative";

export default props => {

    return (
        <div>
            {
                props.children.map((child, index) => {
                    return cloneElement(child, { ...props, key: index });
                })
            }
        </div>
    );
}
import React from "react";
import DirectChild from "./DirectChild";

export default props => {
    return (
        <div>
            <DirectChild name="Carlos" age={12} geek={true} />
            <DirectChild name="Juka" age={17} geek={false} />
        </div>
    );
}
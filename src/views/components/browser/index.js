import React from "react";

import {
    BrowserContainer,
    BrowserHeader,
    BrowserTitle,
    BrowserBody
} from "./styled";

const Browser = (props) => {
    return (
       <BrowserContainer props={props}>
            <BrowserHeader props={props}>
                <BrowserTitle>{props.props.title}</BrowserTitle>
            </BrowserHeader>
            <BrowserBody>
                {props.children}
            </BrowserBody>
       </BrowserContainer>
    );
}

export default Browser;
import React from "react";

import {
    LightboxContainer,
    LightboxHeader,
    LightboxBody,
    LightboxTitle
} from "./styled";

const PopupGallery = () => {
    return (
        <LightboxContainer>
            <LightboxHeader><LightboxTitle>Sample title</LightboxTitle></LightboxHeader>
            <LightboxBody></LightboxBody>
        </LightboxContainer>
    );
}

export default PopupGallery;
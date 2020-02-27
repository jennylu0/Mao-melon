import React from "react";

import {
    MenuItem,
    IconContainer,
    TextContainer
} from "./styled";


const MenuSingle = (data) => {
    return (
       <MenuItem>
            <IconContainer></IconContainer>
            <TextContainer>{data.text}</TextContainer>
       </MenuItem>
    );
}

export default MenuSingle;

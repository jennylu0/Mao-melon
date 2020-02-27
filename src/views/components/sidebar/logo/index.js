import React from "react";

import {
    LogoContainer,
    LogoLink
} from "./styled";


const Logo = () => {
    return (
        <LogoLink href="/">
            <LogoContainer/>
        </LogoLink>
    );
}

export default Logo;

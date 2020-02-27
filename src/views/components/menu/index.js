import React, {useContext} from "react";
import MenuSingle from "./MenuSingle";
import StateContext from "../context";


import {
    Link
} from "react-router-dom";

import {
    MenuContainer
} from "./styled";


const Menu = () => {

    const context = useContext(StateContext);

    const handleClick = (val) => {
        context.setContactActiveState(val);
    }

    return (
       <MenuContainer>
           <Link to="/about" onClick={() => handleClick(false)}><MenuSingle text="Who, me?"/></Link>
           <Link to="/" onClick={() => handleClick(false)}><MenuSingle text="My Stuff"/></Link>
           <Link to="/conventions" onClick={() => handleClick(false)}><MenuSingle text="Schedule"/></Link>
           <Link to="#contact" onClick={() => handleClick(true)}><MenuSingle text='Say "Hi"'/></Link>
       </MenuContainer>
    );
}

export default Menu;

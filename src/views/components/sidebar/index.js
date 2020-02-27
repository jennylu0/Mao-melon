import React from "react";
import Logo from "./logo";
import Intro from "./intro";
import Tweets from "./tweets";
import Social from "../social";

import {
    SidebarContainer,
    ProfilePortrait,
    TickContainer,
    Tick1,
    Tick2,
    Tick3,
} from "./styled";


const Sidebar = () => {
    return (
        <React.Fragment>
            <Social/>
            <Logo/>
            <Intro/>
            <TickContainer>
                <Tick1/>
                <Tick2/>
                <Tick3/>
            </TickContainer>
            <Tweets/>
            <ProfilePortrait>
                <img src="/images/profile-fpo.png"></img>
            </ProfilePortrait>
        </React.Fragment>
    );
}

export default Sidebar;

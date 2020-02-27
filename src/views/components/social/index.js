import React, {useState, useEffect, useContext} from "react";
import StateContext from "../context";

import {
    SocialContainer,
    SocialIconTwitter,
    SocialIconInstagram,
    SocialIconEmail,
    SocialHeader,
    SocialTitle,
    SocialClose,
    SocialCloseIcon,
    SocialIconWrapper,
    SocialIconText,
    SocialContent,
    SocialWrapper
} from "./styled";

const Social = () => {
    const context = useContext(StateContext);

    const initListener = () => {
        if(window.location.hash == "#contact") {
            context.setContactActiveState(true);
        }
    }

    const isActive = context.isContactActive;

    useEffect(() => {
        initListener();
    });

    return (
        <SocialContainer isActive={isActive}>
            <SocialWrapper>
                <SocialHeader>
                    <SocialTitle>
                        Title
                    </SocialTitle>
                    <SocialClose>
                        <SocialCloseIcon></SocialCloseIcon>
                    </SocialClose>
                </SocialHeader>
                <SocialContent>
                    <SocialIconWrapper>
                        <SocialIconTwitter/>
                        <SocialIconText>Text</SocialIconText>
                    </SocialIconWrapper>
                    <SocialIconWrapper>
                        <SocialIconInstagram/>
                        <SocialIconText>Text</SocialIconText>
                    </SocialIconWrapper>
                    <SocialIconWrapper>
                        <SocialIconEmail/>
                        <SocialIconText>Text</SocialIconText>
                    </SocialIconWrapper>
                </SocialContent>
            </SocialWrapper>
        </SocialContainer>
        
    );
}

export default Social;

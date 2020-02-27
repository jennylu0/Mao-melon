import React from "react";

import {
    Tweet,
    ProfileContainer,
    ProfileLink,
    ProfileImg,
    TweetContent,
    Username,
    UsernameLink,
    TweetText
} from "./styled";

const TweetSingle = () => {
    return (
        <Tweet>
            <ProfileContainer>
                <ProfileLink href="#">
                    <ProfileImg src="https://placehold.it/50x50"/>
                </ProfileLink>
            </ProfileContainer>
            <TweetContent>
                <UsernameLink href="#">
                    <Username>
                        Username
                    </Username>
                </UsernameLink>
                <TweetText>
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </TweetText>
            </TweetContent>
        </Tweet>
    );
}

export default TweetSingle;
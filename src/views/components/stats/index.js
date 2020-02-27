import React from "react";
import Browser from "../browser";

import {
    StatsContainer,
    StatsContent,
    StatsLabelContainer,
    StatsLabel,
    InterestsTitle,
    InterestsContainer,
    InterestsItem,
    InterestsIcon
} from "./styled";

const Stats = () => {
    return (
        <StatsContainer>
            <Browser props={{title: "test",backgroundColor: "#ffffff",borderColor:"#383838"}}>
                <StatsContent>
                    <StatsLabelContainer><StatsLabel>Name:</StatsLabel> Mao</StatsLabelContainer>
                    <StatsLabelContainer><StatsLabel inverted>Name:</StatsLabel> Mao</StatsLabelContainer>
                    <InterestsTitle>Interests</InterestsTitle>
                    <InterestsContainer>
                        <InterestsItem>
                            <InterestsIcon src="https://placehold.it/100x100"/>
                        </InterestsItem>
                        <InterestsItem>
                            <InterestsIcon src="https://placehold.it/100x100"/>
                        </InterestsItem>
                        <InterestsItem>
                            <InterestsIcon src="https://placehold.it/100x100"/>
                        </InterestsItem>
                        <InterestsItem>
                            <InterestsIcon src="https://placehold.it/100x100"/>
                        </InterestsItem>
                        <InterestsItem>
                            <InterestsIcon src="https://placehold.it/100x100"/>
                        </InterestsItem>  
                    </InterestsContainer>
                </StatsContent>
            </Browser>
        </StatsContainer>
    )
}

export default Stats;
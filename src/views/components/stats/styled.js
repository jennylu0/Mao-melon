import styled from "styled-components";
import utils from "../utils/utils";

export const StatsContainer = styled.div`
    position: relative;
    left: 30%;
    width: 40%;
`

export const StatsContent = styled.div`
    padding: 1.5em 1.5em 4em 1.5em;
`

export const StatsLabelContainer = styled.div`
    display: block;
`

export const StatsLabel = styled.span`
    font-weight: 600;
    text-transform: uppercase;
    color: ${props => props.inverted ? "#ffffff" : utils.colors.darkGrey};
    background-color: ${props => props.inverted ? utils.colors.darkGrey : "transparent"};
    padding: ${props => props.inverted? "3px 5px" : "0"};
    display: inline-block;
`

export const InterestsTitle = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    background-color: ${utils.colors.darkGrey};
    color: #ffffff;
    position: relative;
    right: 0;
    margin-left: 45%;
    display: inline-block;
    width: 68%;
    padding: 3px 5px;
`

export const InterestsContainer = styled.div`
    display: flex;
    margin-top: 1.5em;
`

export const InterestsItem = styled.div`
    flex: 0 1 20%;
    border: 2px solid ${utils.colors.darkGrey};
    border-radius: 3px;
    padding: .5em;
    margin-right: 1em;

    &:last-child {
        margin-right: 0;
    }
`

export const InterestsIcon = styled.img`
    display: block;
    width: 100%;
`
import styled from "styled-components";
import utils from "../utils/utils";

export const BrowserContainer = styled.div`
    border: 2px solid ${props => props.props.props.borderColor ? props.props.props.borderColor : utils.colors.darkGrey};
    border-radius: 5px;
    background-color: ${props => props.props.props.backgroundColor ? props.props.props.backgroundColor : "transparent" };
    color: ${props => props.props.props.color ? props.props.props.color : utils.colors.darkGrey};
`

export const BrowserHeader = styled.div`
    border-bottom: 2px solid ${props => props.props.props.borderColor ? props.props.props.borderColor : utils.colors.darkGrey};;
    padding: .25em 1em;
    font-weight: 600;
`

export const BrowserTitle = styled.p`
    font-family: ${utils.font.spaceMono};
    text-transform: uppercase;
`

export const BrowserBody = styled.div`
`



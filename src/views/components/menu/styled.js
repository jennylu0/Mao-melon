import styled from "styled-components";
import utils from "../utils/utils";

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    right: 2em;
    top: 2em;
`

export const MenuItem = styled.div`
    display: inline-block;
    text-align: center;
    margin-left: .5em;
    margin-right: .5em;
`

export const IconContainer = styled.div`
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: ${utils.colors.medGrey};    
    margin: 0 auto 1em auto;
`

export const TextContainer = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 11px;
    line-height: 9px;
`


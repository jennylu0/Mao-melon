import styled from "styled-components";
import utils from "../utils/utils";

export const CalContainer = styled.div`
    width: 100%;
    border: 2px solid ${utils.colors.darkGrey};
    border-radius: 5px;
`

export const CalHeader = styled.div`
    width: 100%;
    border-bottom: 2px solid ${utils.colors.darkGrey};
    height: 16px;
`

export const CalBody = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CalTile = styled.div`
    flex: 0 1 calc(100% / 4);
    border: 1px solid ${utils.colors.darkGrey};
    color: ${props => props.filler ? utils.colors.lightGrey : utils.colors.darkGrey};
    background-color: ${props => props.filler ? utils.colors.medGrey : "transparent"};
    padding: 1.5em;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
        &:after { ${props => props.filler ? "" : "content: ''; position: absolute; left: -4px; top: -4px; width: 100%; height: 100%; border: 4px solid red; z-index: 20;"}
            
        }        
    }
`

export const CalTileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CalTileName = styled.p`
    font-family: ${utils.font.montserrat};
    text-transform: uppercase;
    font-weight: 600;
`

export const CalTileLocation = styled.p`
    font-family: ${utils.font.spaceMono};
    text-transform: uppercase;
`

export const CalTileDate = styled.p`
    font-family: ${utils.font.spaceMono};
    text-transform: uppercase;
`

export const LightboxContainer = styled.div`
    border: 2px solid ${utils.colors.darkGrey};
    border-radius: 5px;
    max-width: 80%;
    margin-left: auto;
    margin-right: 5%;
    min-height: 300px;
    margin-top: -3em;
    z-index: 50;
    position: relative;
    background-color: #ffffff;
`

export const LightboxHeader = styled.div`
    border-bottom: 2px solid ${utils.colors.darkGrey};
    padding: .5em 1em;
`

export const LightboxBody = styled.div`
`

export const LightboxTitle = styled.p`
    font-family: ${utils.font.spaceMono};
    text-transform: uppercase;
`
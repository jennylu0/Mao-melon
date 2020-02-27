import styled from "styled-components";
import utils from "../utils/utils";

export const SidebarContainer = styled.div`
    max-width: 300px;
    padding-left: 2em;
    position: fixed;
    left:3em;
    top:3em;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    z-index: 100;
`

export const ProfilePortrait = styled.div`
    // position: absolute;
    left: -3em;
    bottom: -3em;
`
export const TickContainer = styled.div`
    position: relative;
    top: 80px;
    left: 0;
    transform: rotate(15deg);
    transform-origin: 100% 100%;
    z-index: 10;
`

export const Tick = styled.span`
    display: block;
    position: absolute;
    height: 30px;
    width: 24px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.786' height='30.12' viewBox='0 0 26.786 30.12'%3E%3Cpath id='Path_13' data-name='Path 13' d='M3265.794,2414.22l-22.14-21.632,9.734-8.488,17.052,25.814Z' transform='translate(-3243.654 -2384.1)' fill='%23f50b92'/%3E%3C/svg%3E%0A");
`

export const Tick1 = styled(Tick)`
    top: 0;
    left: 0;
    transform-origin: 100% 100%;
`
export const Tick2 = styled(Tick)`
    top: .5em;
    left: -.5em;
    transform: rotate(-35deg);
    transform-origin: 100% 100%;
`
export const Tick3 = styled(Tick)`
    top: 1.25em;
    left: -.5em;
    transform: rotate(-70deg);
    transform-origin: 100% 100%;
`

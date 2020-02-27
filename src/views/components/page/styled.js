import styled from "styled-components";
import utils from "../utils/utils";

export const PageContainer = styled.div`
    
`

export const PageContent = styled.div`
    position: relative;
    margin-left: 300px;
    padding: 50px 0px 50px 90px;
`

export const PageTitle = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    font-family: ${utils.font.montserrat};
    font-weight: bold;
    font-size: 80px;
    line-height: 75px;
    text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
        1px 1px 0 #000;
    color: white;
    transform-origin: top right;
    transform: translateX(-100%) rotate(-90deg);
    text-transform: uppercase;
    margin-left: 35px;
    z-index: -100;
`

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

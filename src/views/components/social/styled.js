import styled from "styled-components";
import utils from "../utils/utils";

export const SocialHeader = styled.div`
    border-bottom: 2px solid ${utils.colors.medGrey};
    display: flex;
`

export const SocialTitle = styled.div`
    padding: 1em;
`

export const SocialClose = styled.div`
    border-left: 2px solid ${utils.colors.darkGrey};
`

export const SocialCloseIcon = styled.span`
    height: 20px;
    width: 20px;
    display: block;
`

export const SocialIconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
`

export const SocialIconText = styled.div`
    text-transform: uppercase;
    border: 2px solid ${utils.colors.darkGrey};
    padding: 0 1em;
`

export const SocialIcon = styled.a`
    display: block;
    border-radius: 3px;
    background-repeat: no-repeat;
    background-position: center center;
    height: 20px;
    width: 20px;
`

export const SocialIconTwitter = styled(SocialIcon)`
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitter' class='svg-inline--fa fa-twitter fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='white' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'%3E%3C/path%3E%3C/svg%3E");    
    color: #ffffff;
    background-size: 12px 12px;
    background-color: ${utils.colors.melon};
`

export const SocialIconInstagram = styled(SocialIcon)`
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='instagram' class='svg-inline--fa fa-instagram fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'%3E%3C/path%3E%3C/svg%3E");
    color: ${utils.colors.darkGrey};
    background-size: 14px 14px;
    background-color: ${utils.colors.ocean};
`

export const SocialIconEmail = styled(SocialIcon)`
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='envelope-open-text' class='svg-inline--fa fa-envelope-open-text fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z'%3E%3C/path%3E%3C/svg%3E");
    color: ${utils.colors.darkGrey};
    background-size: 12px 12px;
    background-color: ${utils.colors.neon};
`

export const SocialContent = styled.div`
    padding: 1em;
`

export const SocialWrapper = styled.div`
    position: relative;
`

export const SocialContainer = styled.div`
    position: ${props => props.isActive ? "fixed" : "absolute"};
    top: ${props => props.isActive ? "50%" : "-4em"};
    right: ${props => props.isActive ? "50%" : "-2.75em"};
    transform: ${props => props.isActive ? "translate(-50%, -50%)" : ""}; 
    border: 2px solid ${utils.colors.medGrey};
    z-index: 500;
    padding-top: ${props => props.isActive ? "0" : "3em"};
    ${props => !props.isActive && `
        ${SocialHeader} {
            display: none;
        }

        ${SocialIconText} {
            display: none;
        }
    `}

    // &::after {
    //     content: "";
    //     padding: 1.5em;
    //     // border: 5px solid transparent;
    //     position: absolute;
    //     left: -1.5em;
    //     top: -1.5em;
    //     height: 100%;
    //     width: 100%;
    //     background-image: linear-gradient(135deg, red 30px, transparent 30px, transparent 60px, blue 60px );
    //     background-size: 200px;
    //     z-index: -1;
    // }
`
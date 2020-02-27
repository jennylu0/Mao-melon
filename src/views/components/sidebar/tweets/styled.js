import styled from "styled-components";
import utils from "../../utils/utils";

export const TweetsContainer = styled.div`
    flex: 1 1 100%;
    display: flex;
    overflow: auto;
`

export const TweetBubble = styled.div`
    background-color: ${utils.colors.lightGrey};
    border-radius: ${utils.borderRadius.sm} ${utils.borderRadius.sm} ${utils.borderRadius.sm} 0;
    padding: 2em;
    margin-top: 3em;
    position: relative;
    margin-bottom: 25px;
    display: flex;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 0;
        height: 0;
        border-top: 25px solid ${utils.colors.lightGrey};
        border-right: 25px solid transparent;
    }
`

export const BubbleContent = styled.div`
`

export const Tweet = styled.div`
    display: flex;
    margin-bottom: 2em;
`

export const ProfileContainer = styled.div`
    flex: 1 1 auto;
    margin-right: 1.5em;
`

export const ProfileLink = styled.a`
    display: block;
    border-radius: 100%;
    overflow: hidden;
`

export const ProfileImg = styled.img`
    display: block;
    width: 45px;
`

export const TweetContent = styled.div`
`

export const TweetWrapper = styled.div`
    overflow: auto;
`

export const Username = styled.div`
`

export const UsernameLink = styled.a`
    color: ${utils.colors.melon};
    font-family: ${utils.font.montserrat};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: .5em;
    text-decoration: none;
    display: block;
    font-size: 11px;
`

export const TweetText = styled.p`
    line-height: 1.25em;
`

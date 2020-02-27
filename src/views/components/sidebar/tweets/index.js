import React, {useState, useEffect} from "react";
import TweetSingle from "./TweetSingle";
import axios from "axios";
import OAuth2 from "oauth";

import {
    TweetsContainer,
    TweetBubble,
    BubbleContent,
    TweetWrapper
} from "./styled";

const Tweets = () => {

    const [state, setState] = useState([]);

    // let KEY = "hdpBNWMMjpBN1sxGC8xs8sBG7";
    // let SECRET = "zOhJjiM7u17VUDMCulTmjPfQO2PYEsveDmBXTyoL0jY1qo8PKe";
    // let access_token = "2991356710-TmX9RonKnVcItA8rqEwuQvMT92eJMC8CMt9eP1N";

    // let oauth2 = new OAuth2(KEY, SECRET, null, 'oauth2/token', null);

    // oauth2.getOAuthAccessToken('', {
    //     'grant_type': 'client_credentials'
    // }, function (e, access_token) {
    //     console.log(access_token); //string that we can use to authenticate request
    // });

    // var options = {
    //     hostname: 'api.twitter.com',
    //     path: '/1.1/statuses/user_timeline.json?screen_name=maomonium',
    //     headers: {
    //         Authorization: 'Bearer ' + access_token
    //     }
    // };


    useEffect(() => {

        // axios.get(options)
        //     .then(res => {
        //         const tweets = res.data;
        //         this.setState({tweets});
        //     })
    });
    
    return (
        <TweetsContainer>
            <TweetBubble>   
                <TweetWrapper>
                    <BubbleContent>
                        <TweetSingle/>
                        <TweetSingle/>
                        <TweetSingle/>
                    </BubbleContent>
                </TweetWrapper>
            </TweetBubble>
        </TweetsContainer>
    );
}

export default Tweets;
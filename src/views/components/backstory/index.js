import React from "react";
import Browser from "../browser";

import {
    BackstoryContainer,
    BackstoryContent,
    BackstoryText
} from "./styled";

const Backstory = () => {
    return (
       <BackstoryContainer>
           <Browser props={{title: "Backstory",backgroundColor: "#383838",borderColor:"#ffffff", color:"#ffffff"}}>
                <BackstoryContent>
                    <BackstoryText>
                        Copy here
                    </BackstoryText>
                </BackstoryContent>
           </Browser>
       </BackstoryContainer>
    );
}

export default Backstory;
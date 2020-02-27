import React from "react";
import Stats from "../components/stats";
import Backstory from "../components/backstory";
import Data from "../../model/pages/about";

import {
    Page
} from "../Components";

const About = () => {
    return (
        <Page props={Data}>
            <Stats/>
            <Backstory/>
        </Page>
    );
}

export default About;
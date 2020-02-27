import React from "react";
import Calendar from "../components/calendar";
import Data from "../../model/pages/conventions";

import {
    Page
} from "../Components";

const Conventions = () => {
    return (
        <Page props={Data}>
            <Calendar props={Data}/>
        </Page>
    );
}

export default Conventions;
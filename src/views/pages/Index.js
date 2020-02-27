import React from "react";
import Gallery from "../components/gallery";
import data from "../../model/pages/index";

import {
    Page
} from "../Components";

const Index = () => {
    return (
        <Page props={data}>
            <Gallery props={data.gallery}/>
        </Page>
    );
}

export default Index;
import React from "react";
import Sidebar from "../sidebar";
import Menu from "../menu";
import Provider from "../context/Provider";

import {
    PageContainer,
    PageTitle,
    SidebarContainer,
    PageContent
} from "./styled";


const Page = (props) => {
    console.log(props.props);
    return (
        <Provider>
            <PageContainer>
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>
                <PageContent>
                    <Menu/>
                    <PageTitle>{props.props.pageTitle}</PageTitle>
                    {props.children}
                </PageContent>
            </PageContainer>
        </Provider>
    );
}

export default Page;

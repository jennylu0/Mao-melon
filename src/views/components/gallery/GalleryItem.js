import React, {useState} from "react";
import Modal from "react-modal";

import {
    GalleryItemContainer,
    HeaderContainer,
    HeaderTitleArea,
    HeaderButtonArea,
    HeaderButton,
    HeaderButtonTwitter,
    HeaderButtonInsta,
    HeaderButtonTumblr,
    HeaderTitle,
    HeaderLabel,
    GalleryImgContainer,
    GalleryImg
} from "./styled";

Modal.setAppElement('#root');

const GalleryItem = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <React.Fragment>
        <GalleryItemContainer className="gallery-item">
            <HeaderContainer>
                <HeaderTitleArea>
                    <HeaderLabel category={props.props.category}/>
                    <HeaderTitle>{props.props.title}</HeaderTitle>
                </HeaderTitleArea>
                <HeaderButtonArea>
                    <HeaderButton>
                        <HeaderButtonTwitter href={props.props.social.twitter}/>
                    </HeaderButton>
                    <HeaderButton>
                        <HeaderButtonInsta href={props.props.social.instagram}/>
                    </HeaderButton>
                    <HeaderButton>
                        <HeaderButtonTumblr href={props.props.social.tumblr}/>
                    </HeaderButton>
                </HeaderButtonArea>
            </HeaderContainer>
            <GalleryImgContainer onClick={() => handleOpen()}>
                <GalleryImg src={props.props.thumbnail}/>
            </GalleryImgContainer>
        </GalleryItemContainer>

        <Modal isOpen={modalIsOpen} contentLabel="test" onClick={() => handleClose()} onRequestClose={() => handleClose()}>
            Modal content
        </Modal>

        </React.Fragment>
    );
}

export default GalleryItem;

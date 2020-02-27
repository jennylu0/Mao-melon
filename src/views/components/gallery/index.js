import React from "react";
import Filters from "./Filters";
import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-component";

import {
    GalleryContainer
} from "./styled";


const Gallery = (props) => {
    const masonryOptions = {
        transitionDuration: 0,
        columnWidth: '.gallery-item',
        gutter: 15,
        stagger: 30,
        itemSelector: '.gallery-item',
        percentPosition: true
    };
    
    const items = props.props.map((item, index) => {
        return (
            <GalleryItem props={item} key={index} />
        )
    });

    return (
        <GalleryContainer>
            <Filters/>
            <Masonry className="" elementType="ul" options={masonryOptions}>
                {items}
            </Masonry>
        </GalleryContainer>
    );
}

export default Gallery;

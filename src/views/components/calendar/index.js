import React from "react";
import Tile from "./Tile";
import Lightbox from "./PopupGallery";

import {
    CalContainer,
    CalHeader,
    CalBody,
} from "./styled";

const Calendar = (props) => {
    return (
        <React.Fragment>
            <CalContainer>
                <CalHeader></CalHeader>
                <CalBody>
                    {/* <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile filler/><Tile filler/> */}
                    {
                        props.props.calendar.map((item, index) => {
                            return (
                                // console.log(item)
                                <Tile props={item} key={index} filler={item.upcoming}/>
                            )
                        })
                    }
                </CalBody>
            </CalContainer>
            <Lightbox></Lightbox>
        </React.Fragment>
    );
}

export default Calendar;
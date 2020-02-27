import React from "react";

import {
    CalTile,
    CalTileContent,
    CalTileName,
    CalTileLocation,
    CalTileDate
} from "./styled";

const Tile = (props) => {
    console.log(props.filler);
    return (
        <CalTile filler={props.filler}>
            <CalTileContent>
                <CalTileName>{props.props.name}</CalTileName>
                <CalTileLocation>{props.props.location}</CalTileLocation>
                <CalTileDate>{props.props.date}</CalTileDate>
            </CalTileContent>
        </CalTile>
    );
}

export default Tile;
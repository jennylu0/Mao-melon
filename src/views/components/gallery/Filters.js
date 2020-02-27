import React from "react";

import {
    FilterContainer,
    FilterText
} from "./styled";


const Filters = () => {
    return (
        <React.Fragment>
            <FilterContainer>
                <FilterText>Illustrations</FilterText>
            </FilterContainer>
            <FilterContainer>
                <FilterText>Merch design</FilterText>
            </FilterContainer>
        </React.Fragment>
    );
}

export default Filters;

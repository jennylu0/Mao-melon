import React, {useState} from "react";
import StateContext from "./index";

const Provider = (props) => {
    
    const [isContactActive, setContactActiveState] = useState(false);

    return (
        <StateContext.Provider value={{
            setContactActiveState: setContactActiveState,
            isContactActive: isContactActive
            }}>
            {props.children}
        </StateContext.Provider>
    );
}

export default Provider;
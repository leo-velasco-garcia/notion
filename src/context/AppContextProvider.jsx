import { AppContext } from "./AppContext";
import { useState } from "react";
import itemsNav from "../data/itemsNav";
import itemsPag from "../data/itemsPag";


export const AppContextProvider = ({ children }) => {
    const [navAbierto, setNavAbierto] = useState(false);
    const value = { itemsNav, itemsPag, navAbierto, setNavAbierto };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
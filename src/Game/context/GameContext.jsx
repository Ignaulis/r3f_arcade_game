import { createContext, useRef } from "react";

export const ShipContext = createContext()

export const ShipContextProvider = ({children}) => {

    const shipBody = useRef()

    return(
        <ShipContext.Provider
            value={{
                shipBody
            }}
        >
            {children}
        </ShipContext.Provider>
    );
}
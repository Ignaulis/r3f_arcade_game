import { createContext, useRef, useState } from "react";

export const ShipContext = createContext()

export const ShipContextProvider = ({children}) => {

    const shipBody = useRef()
    const [gameOver, setGameOver] = useState(false)

    return(
        <ShipContext.Provider
            value={{
                shipBody,
                gameOver,
                setGameOver
            }}
        >
            {children}
        </ShipContext.Provider>
    );
}
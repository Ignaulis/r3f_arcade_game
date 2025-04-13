import { createContext, useRef, useState } from "react";

export const ShipContext = createContext()

export const ShipContextProvider = ({children}) => {

    const shipBody = useRef()
    const [gameOver, setGameOver] = useState(false)
    const [play, setPlay] = useState(false)
    const [restart, setRestart] = useState(false)

    return(
        <ShipContext.Provider
            value={{
                shipBody,
                gameOver,
                setGameOver,
                play,
                setPlay,
                restart,
                setRestart
            }}
        >
            {children}
        </ShipContext.Provider>
    );
}
import {createContext, useRef, useState } from "react";

export const ShipContext = createContext()

export const ShipContextProvider = ({children}) => {

    const shipBody = useRef()
    const [gameOver, setGameOver] = useState(false)
    const [play, setPlay] = useState(false)
    const [restart, setRestart] = useState(false)
    const scoreRef = useRef(0)
    const [points, setPoints] = useState(0)
    const [hiscore, setHiscore] = useState(0)
    const [showPoints, setShowPoints] = useState(true)
    const [alert, setAlert] = useState(false)
    const [active, setActive] = useState(true)
    const [about, setAbout] = useState(false)

    return(
        <ShipContext.Provider
            value={{
                shipBody,
                gameOver,
                setGameOver,
                play,
                setPlay,
                restart,
                setRestart,
                scoreRef,
                points,
                setPoints,
                showPoints,
                setShowPoints,
                hiscore,
                setHiscore,
                alert,
                setAlert,
                active,
                setActive,
                about,
                setAbout
            }}
        >
            {children}
        </ShipContext.Provider>
    );
}
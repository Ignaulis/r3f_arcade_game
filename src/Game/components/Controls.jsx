import { useEffect, useState } from "react";

export function Controls() {

    const [pressed, setPressed] = useState({
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,
        Space: false
    })

    useEffect(() => {
        const pressedButton = (e) => {
            if (e.code in pressed) {
                setPressed(prev => ({
                    ...prev,
                    [e.code]: true
                }))
            }
        }
        const letGoButton = (e) => {
            if (e.code in pressed) {
                setPressed(prev => ({
                    ...prev,
                    [e.code]: false
                }))
            }
        }

        window.addEventListener('keydown', pressedButton)
        window.addEventListener('keyup', letGoButton)

    }, [pressed])

    return pressed
}
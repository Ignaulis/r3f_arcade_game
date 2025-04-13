import { useContext, useEffect, useState } from "react";
import { ShipContext } from "../context/GameContext";
import { Html } from "@react-three/drei";


export default function GameOver() {

    const { shipBody, gameOver } = useContext(ShipContext)
    const [positionZ, setPositionZ] = useState(0)
    const [positionY, setPositionY] = useState(0)

    useEffect(() => {
        if (gameOver && shipBody.current) {
            const position = shipBody.current.translation()
            setPositionZ(position.z)
            setPositionY(position.y)
        }
    }, [shipBody, gameOver])

    return (
        <>
            {
                gameOver &&
                <Html
                    distanceFactor={2.2}
                    position={[0, positionY, positionZ]}
                    wrapperClass="go"
                >
                    <div>Game Over</div>
                    <div className="go-space">Press R to restart</div>

                </Html>
            }

        </>

    );
}
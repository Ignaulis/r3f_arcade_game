import { useContext, useEffect, useState } from "react";
import { ShipContext } from "../context/GameContext";
import { Html } from "@react-three/drei";


export default function GameOver() {

    const { shipBody, gameOver, isMobile } = useContext(ShipContext)
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
                    distanceFactor={isMobile ? 3 : 2.2}
                    position={[isMobile ? 1 : 0, positionY, isMobile ? positionZ - 5 : positionZ]}
                    wrapperClass="go"
                >
                    {
                        isMobile ?
                            <div>Game Over</div>
                            :
                            <>
                                <div>Game Over</div>
                                <div className="go-space">Press R to restart</div>

                            </>
                    }

                </Html>
            }

        </>

    );
}
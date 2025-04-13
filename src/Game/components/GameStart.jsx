import { Html, Float } from "@react-three/drei";
import { useContext } from "react";
import { ShipContext } from "../context/GameContext";

export default function GameStart() {

    const { setPlay, play } = useContext(ShipContext)

    return (
        <>
            {
                !play &&
                <Float
                    rotationIntensity={0.3}
                >
                    <Html
                        position={[1.5, 1, -1]}
                        distanceFactor={3}
                        wrapperClass="start"
                    >
                        <div className="play" onClick={() => setPlay(true)}>Play</div>
                        <div className="difficulty">Difficulty</div>
                        <div className="hiscores">Hiscores</div>
                    </Html>
                </Float>
            }
        </>


    );
}
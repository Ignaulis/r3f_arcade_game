import { Html, Float } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { ShipContext } from "../context/GameContext";
import { Controls } from "./Controls";
import { useFrame } from "@react-three/fiber";

export default function GameStart() {

    const { setPlay, play, active, setActive, setAbout, isMobile } = useContext(ShipContext)
    const controls = Controls()

    const pressedRef = useRef(false);

    useFrame(() => {
        if (play) return
        if ((controls.ArrowUp || controls.ArrowDown) && !pressedRef.current) {
            setActive(prev => !prev);
            pressedRef.current = true;
        }

        if (!controls.ArrowUp && !controls.ArrowDown) {
            pressedRef.current = false;
        }
    });

    useEffect(() => {
        if (play) {
            setAbout(false)
            return
        }
        if (controls.Space && active) {
            setPlay(true)
        } else if (controls.Space && !active) {
            setAbout(true)
        }
    }, [active, controls.Space, setPlay, setAbout, play])


    return (
        <>
            {
                !play &&
                <Float
                    rotationIntensity={0.3}
                >
                    <Html
                        position={[isMobile ? 0 : 1.5, 1, -1]}
                        distanceFactor={3}
                        wrapperClass="start"
                    >
                        <div className={active ? 'play active' : 'play'} onClick={() => setPlay(true)}>Play</div>
                        <div className={active ? "hiscores" : 'hiscores active'} onClick={() => setAbout(true)}>About Game</div>
                    </Html>
                </Float>
            }
        </>


    );
}
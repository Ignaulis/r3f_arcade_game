import RoundBlock from "./Blocks/RoundBlock";
import { RigidBody } from "@react-three/rapier";
import SpikeRound from "./Traps/SpikeTraps/SpikeRound";
import WallTrapRound from "./Traps/WallTrap/WalltrapRound";
import MovingTrapRound from "./Traps/MovingTraps/MovingTrapRound";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Tunell() {

    const [component, setComponent] = useState([
        { type: "RoundBlock", position: [0, 0, 0] },
        { type: "RoundBlock", position: [0, 0, -3] },
        { type: "RoundBlock", position: [0, 0, -6] },
        { type: "SpikeRound", position: [0, 0, -9] },
        { type: "WallTrapRound", position: [0, 0, -12] },
        { type: "MovingTrapRound", position: [0, 0, -15] },
        { type: "SpikeRound", position: [0, 0, -18] },
        { type: "WallTrapRound", position: [0, 0, -21] },
        { type: "MovingTrapRound", position: [0, 0, -24] },
    ]);

    const timer = useRef(0)

    useFrame((_, delta) => {
        timer.current += delta

        if (timer.current >= 5) {
            timer.current = 0

            const newComponent = ['SpikeRound', 'WallTrapRound', 'MovingTrapRound']
            const randComponent = newComponent[Math.floor(Math.random() * newComponent.length)]
            const newZ = component[component.length - 1].position[2] -3
            setComponent((prev) => [
                ...prev,
                {
                    type: randComponent,
                    position: [0, 0, newZ]
                }
            ])
        }

    })

    return (
        <RigidBody type="fixed">
            {
                component.map((comp, index) => {
                    const Component = comp.type === 'RoundBlock'
                    ? RoundBlock
                    : comp.type === 'SpikeRound'
                    ? SpikeRound
                    : comp.type === 'WallTrapRound'
                    ? WallTrapRound
                    : MovingTrapRound

                    return <Component key={index} position={comp.position}/>
                })
            }
        </RigidBody>


    );
}
import RoundBlock from "./Blocks/RoundBlock";
import SpikeRound from "./Traps/SpikeTraps/SpikeRound";
import WallTrapRound from "./Traps/WallTrap/WalltrapRound";
import MovingTrapRound from "./Traps/MovingTraps/MovingTrapRound";
import { useState, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import { ShipContext } from "../context/GameContext";

export default function Tunell() {

    const [component, setComponent] = useState([
        { type: "RoundBlock", position: [0, 0, 0] },
        { type: "RoundBlock", position: [0, 0, -3] },
        { type: "RoundBlock", position: [0, 0, -6] },
        { type: "WallTrapRound", position: [0, 0, -9] },
        { type: "WallTrapRound", position: [0, 0, -12] },
        { type: "WallTrapRound", position: [0, 0, -15] },
        { type: "WallTrapRound", position: [0, 0, -18] }
    ]);

    const { shipBody } = useContext(ShipContext)

    useFrame(() => {
        if (shipBody.current) {

            const shipPosition = shipBody.current.translation()
            const compLastZPos = component[component.length - 1].position[2]

            if (shipPosition.z <= compLastZPos + 12) {
                setComponent((prev) => {
                    const newComponent = ['SpikeRound', 'WallTrapRound', 'MovingTrapRound']
                    const randComponent = newComponent[Math.floor(Math.random() * newComponent.length)]
                    const newZ = prev[prev.length - 1].position[2] - 3
                    return [
                        ...prev.slice(1),
                        {
                            type: randComponent,
                            position: [0, 0, newZ]
                        }
                    ]
                })

            }
        }
    })

    return (
        <>
            {
                component.map((comp) => {
                    const Component = comp.type === 'RoundBlock'
                        ? RoundBlock
                        : comp.type === 'SpikeRound'
                            ? SpikeRound
                            : comp.type === 'WallTrapRound'
                                ? WallTrapRound
                                : MovingTrapRound

                    return (<Component key={comp.position[2]} position={comp.position} />)
                })
            }
        </>
    );
}
import { RigidBody } from "@react-three/rapier";
import BlockStart from "../../Blocks/Block";
import RoundBlock from "../../Blocks/RoundBlock";
import { useMemo } from "react";

export default function WallTrapRound({ position = [0, 0, 0] }) {

    const randomPosition = useMemo(() => [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3)
    ], [])

    const position1 = useMemo(() => randomPosition, [randomPosition])
    const position2 = useMemo(() => randomPosition, [randomPosition])

    return (
        <RigidBody
            type="fixed"
            position={position}
        >
            <mesh>
                <RoundBlock />
            </mesh>
            <mesh>
                <BlockStart
                    rotation={[Math.PI / 2, 0, 0]}
                    position={position1}
                    color='yellow'
                    lineWidth={2}
                />
            </mesh>
            <mesh>
                <BlockStart
                    rotation={[Math.PI / 2, 0, 0]}
                    position={position2}
                    color='yellow'
                    lineWidth={2}
                />
            </mesh>
        </RigidBody>
    );
}
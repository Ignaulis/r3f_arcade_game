import { Edges } from "@react-three/drei";
import Blocks from "../../Blocks/Blocks";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export default function MovingTrap({ position = [0, 0, 0], rotation = [0, 0, 0], trapPosition }) {

    const trap = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const y = Math.sin(time)
        if (trap.current) {
            const basePosition = trap.current.translation()

            if (trapPosition) {
                trap.current.setNextKinematicTranslation({ x: basePosition.x, y: y + 0.9, z: basePosition.z })
            } else {
                trap.current.setNextKinematicTranslation({ x: y + 0.9, y: basePosition.y, z: basePosition.z })
            }
        }
    })

    return (
        <group
            {...{ position, rotation }}
        >
            <mesh>
                <Blocks />
            </mesh>
            <RigidBody
                ref={trap}
                type="kinematicPosition"
                position={[1, 0.45, 1]}
                restitution={0.2}
                friction={0}
            >
                <mesh >
                    <boxGeometry args={[2.8, 0.4, 0.4]} />
                    <meshBasicMaterial color={'black'} />
                    <Edges scale={1} color={'cyan'} threshold={2} />
                </mesh>
            </RigidBody>

        </group>

    );
}
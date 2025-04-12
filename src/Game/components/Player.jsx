import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three'
import { Controls } from "./Controls";
import { ShipContext } from "../context/GameContext";

export default function Player() {

    const [color, setColor] = useState('cyan')
    const controls = Controls()
    const ship = useGLTF('./ship/scene.gltf')
    const shipRef = useRef()
    const { shipBody } = useContext(ShipContext)
    const { camera } = useThree()

    const cameraOffset = new THREE.Vector3(0, 0.4, 2)
    const cameraLerp = 0.1

    const baseSpeed = 3
    const boostSpeed = 6
    const straveSpeed = 1

    useFrame((_, delta) => {

        const shipRotate = shipRef.current.rotation
        shipRotate.y += delta * 2

        // camera
        if (shipBody.current) {

            const position = shipBody.current.translation()
            const cameraBasePosition = new THREE.Vector3().copy(position)
            cameraBasePosition.x = position.x + 1
            const targetCamera = new THREE.Vector3()
                .copy(cameraBasePosition)
                .add(cameraOffset)
            camera.position.lerp(targetCamera, cameraLerp)
            camera.lookAt(cameraBasePosition)

            const velocity = new THREE.Vector3(0, 0, -baseSpeed)

            // controls
            if (controls.ArrowLeft) {
                velocity.x -= straveSpeed

                if (shipRotate.z < 0.2) {
                    shipRotate.z += 0.01
                }

                shipRotate.y = 0
            } else if (controls.ArrowRight) {
                velocity.x += straveSpeed
                if (shipRotate.z > -0.2) {
                    shipRotate.z -= 0.01
                }

                shipRotate.y = 0
            } else {

                if (shipRotate.z > 0) {
                    shipRotate.z -= 0.01
                } else if (shipRotate.z < 0) {
                    shipRotate.z += 0.01
                }
            }

            if (controls.ArrowUp) {
                velocity.y += straveSpeed

                if (shipRotate.x < 0.2) {
                    shipRotate.x += 0.02

                }
            } else if (controls.ArrowDown) {
                velocity.y -= straveSpeed

                if (shipRotate.x > -0.2) {
                    shipRotate.x -= 0.02
                }
            } else {

                if (shipRotate.x > 0) {
                    shipRotate.x -= 0.01
                } else if (shipRotate.x < 0) {
                    shipRotate.x += 0.01
                }
            }

            if (controls.Space) {
                velocity.z -= boostSpeed
                setColor('crimson')
                shipRotate.y += delta * 4
            } else {
                setColor('cyan')
                shipRotate.y += delta * 2
            }

            shipBody.current.setLinvel({
                x: velocity.x,
                y: velocity.y,
                z: velocity.z
            },
                true
            )
        }
    })

    const handleCollision = (e) => {
        if(e) {
            console.log('veik');
            
        }

    }

    return (
        <>
            <RigidBody
                ref={shipBody}
                colliders='hull'
                type='dynamic'
                mass={1}
                linearDamping={0.1}
                angularDamping={0.1}
                position={[0, 1.45, 1]}
                onCollisionEnter={handleCollision}
            >
                <primitive
                    ref={shipRef}
                    object={ship.scene}
                    scale={0.08}
                position={[1, 0, 0]}
                />
            </RigidBody>
            <directionalLight
                position={[1, 0.7, 2]}
                intensity={15}
                color={color}
            />
        </>
    );
}
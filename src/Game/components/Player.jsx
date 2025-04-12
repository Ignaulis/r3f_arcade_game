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
    const {shipBody} = useContext(ShipContext)
    const { camera } = useThree()

    const cameraOffset = new THREE.Vector3(0, 0.8, 4)
    const cameraLerp = 0.1

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
            
            
            // controls
            if (controls.ArrowLeft) {
                position.x -= 0.03

                if (shipRotate.z < 0.2) {
                    shipRotate.z += 0.01
                }

                shipRotate.y = 0
            } else if (controls.ArrowRight) {
                position.x += 0.03

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
                position.y += 0.03

                if (shipRotate.x < 0.2) {
                    shipRotate.x += 0.02

                }
            } else if (controls.ArrowDown) {
                position.y -= 0.03

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
                position.z -= 0.08
                setColor('crimson')
                shipRotate.y += delta * 4
            } else {
                setColor('cyan')
                shipRotate.y += delta * 2
            }

            position.z -= 0.01
            shipBody.current.setNextKinematicTranslation(position)
        }
    })

    return (
        <>
            <RigidBody ref={shipBody} colliders='hull' type='kinematicPosition'>
                <primitive
                    ref={shipRef}
                    object={ship.scene}
                    scale={0.12}
                    position={[1, 0.45, 1]}
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
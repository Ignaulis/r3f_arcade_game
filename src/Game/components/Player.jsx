import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three'

export default function Player() {

    const ship = useGLTF('./ship/scene.gltf')
    const shipRef = useRef()
    const shipBody = useRef()
    const { camera } = useThree()

    const cameraOffset = new THREE.Vector3(1, 0.8, 4)
    const cameraLerp = 0.1

    useFrame((_, delta) => {

        shipRef.current.rotation.y += delta * 2
        if (shipBody.current) {

            const shipPosition = shipBody.current.translation()

            const targetCamera = new THREE.Vector3().copy(shipPosition).add(cameraOffset)
            camera.position.lerp(targetCamera, cameraLerp)

            camera.lookAt(targetCamera)

            const position = shipBody.current.translation()
            position.z -= 0.01
            shipBody.current.setNextKinematicTranslation(position)
        }

    })

    return (
        <>
            <RigidBody ref={shipBody} colliders='hull' type={'kinematicPosition'}>
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
                color={'cyan'}
            />
        </>
    );
}
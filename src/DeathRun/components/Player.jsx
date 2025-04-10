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

    useFrame((_, delta) => {

        shipRef.current.rotation.y += delta * 2

        const shipPosition = shipRef.current.position

        camera.position.lerp(
            new THREE.Vector3(
                shipPosition.x,
                shipPosition.y + 0.8,
                shipPosition.z + 3
            ),
            0.2
        )
        camera.lookAt(shipPosition)

        if(shipBody.current) {
            const position = shipBody.current.translation()
            position.z -= 0.01
            shipBody.current.setNextKinematicTranslation(position)
        }
        
    })

    return (
        <>
            <RigidBody ref={shipBody} type={'kinematicPosition'}>
                <primitive
                    ref={shipRef}
                    object={ship.scene}
                    scale={0.12}
                    position={[1, 0.45, 1]}
                />
            </RigidBody>
            <directionalLight
                position={[1, 0.7, 2]}
                intensity={20}
                color={'cyan'}
            />
        </>
    );
}
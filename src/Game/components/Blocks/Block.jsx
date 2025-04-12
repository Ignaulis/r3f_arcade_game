import * as THREE from 'three'
import { Edges } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'black' })
const scale = [1, 0.3, 1]

export default function BlockStart({ position = [0, 0, 0], rotation = [0, 0, 0], color = "#00ffff", lineWidth = 1 }) {

    return (
        <RigidBody
            type='fixed'
        >
            <mesh
                geometry={boxGeometry}
                material={material}
                receiveShadow
                scale={scale}
                position={position}
                rotation={rotation}
            >
                <Edges
                    scale={1}
                    threshold={1}
                    color={color}
                    lineWidth={lineWidth}
                />
            </mesh>
        </RigidBody>
    );
}
import * as THREE from 'three'
import { Edges } from '@react-three/drei'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'black' })
const scale = [1, 0.3, 1]

export default function BlockStart({ position = [0, 0, 0] }) {

    return (
        <mesh
            geometry={boxGeometry}
            material={material}
            receiveShadow
            scale={scale}
            position={position}
        >
            <Edges
                scale={1}
                threshold={1}
                color={"#00ffff"}
            />
        </mesh>
    );
}
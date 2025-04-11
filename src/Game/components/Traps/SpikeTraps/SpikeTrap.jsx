import { Edges } from "@react-three/drei";
import { ConeCollider, RigidBody } from "@react-three/rapier";

export default function SpikeTrap({ position = [0, 2, 0] }) {

    return (
        <group position={position}>
            <RigidBody type="fixed" colliders={false}>
                <mesh position={[0, 0.9, 0]}>
                    <coneGeometry args={[0.5, 1.5, 6]}/>
                    <meshBasicMaterial color={'black'}/>
                    <Edges color={'red'} scale={1} threshold={2} lineWidth={2} />
                </mesh>
                <ConeCollider args={[1.6, 1]} />
            </RigidBody>

        </group>

    );
}
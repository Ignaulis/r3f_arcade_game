
import { Edges } from "@react-three/drei";
import BlockStart from "../../Blocks/Block";

export default function SpikeTrap({ position = [0, 2, 0] }) {


    return (
        <group
            position={position}
        >
            <mesh>
                <BlockStart position={[0, 0, 0]} />
            </mesh>
            <mesh position={[0, 0.9, 0]}>
                <coneGeometry args={[0.5, 1.5, 6]} />
                <meshBasicMaterial color={'black'} />
                <Edges color={'cyan'} scale={1} threshold={2} />
            </mesh>
        </group>

    );
}
import { Edges } from "@react-three/drei";
import Blocks from "../../Blocks/Blocks";

export default function MovingTrap({ position = [0, 0, 0], rotation = [0, 0, 0] }) {

    return (
        <group
            {...{ position, rotation }}
        >
            <mesh>
                <Blocks />
            </mesh>
            <mesh position={[1, 0.45, 1]}>
                <boxGeometry args={[2.8, 0.4, 0.4]} />
                <meshBasicMaterial color={'black'} />
                <Edges scale={1} color={'cyan'} threshold={2} />
            </mesh>
        </group>

    );
}
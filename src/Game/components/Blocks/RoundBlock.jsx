import { RigidBody } from "@react-three/rapier";
import Blocks from "./Blocks";

export default function RoundBlock({position = [0, 0, 0]}){

    return(
        <RigidBody
            type="fixed"
            position={position}
        >
            <Blocks rotation={[0, 0, 0]} position={[0, -0.65, 0]}/>
            <Blocks rotation={[0, 0, 0]} position={[0, 2.65, 0]}/>
            <Blocks rotation={[0, 0, Math.PI / 2]} position={[-0.65, 0, 0]}/>
            <Blocks rotation={[0, 0, Math.PI / 2]} position={[2.65, 0, 0]}/>
        </RigidBody>
    );
}
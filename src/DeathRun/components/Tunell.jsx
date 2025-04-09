import RoundBlock from "./Blocks/RoundBlock";
import { RigidBody } from "@react-three/rapier";
import SpikeRound from "./Traps/SpikeTraps/SpikeRound";

export default function Tunell() {

    return (
            <RigidBody type="fixed">
                <RoundBlock position={[0, 0, 0]} />
                <SpikeRound position={[0, 0, -3]}/>
            </RigidBody>


    );
}
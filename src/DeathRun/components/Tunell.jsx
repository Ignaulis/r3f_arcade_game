import RoundBlock from "./Blocks/RoundBlock";
import { RigidBody } from "@react-three/rapier";
import SpikeRound from "./Traps/SpikeTraps/SpikeRound";
import WallTrapRound from "./Traps/WallTrap/WalltrapRound";
import MovingTrapRound from "./Traps/MovingTraps/MovingTrapRound";

export default function Tunell() {

    return (
            <RigidBody type="fixed">
                <RoundBlock position={[0, 0, 0]} />
                <RoundBlock position={[0, 0, -3]} />
                <RoundBlock position={[0, 0, -6]} />
                <SpikeRound position={[0, 0, -9]}/>
                <WallTrapRound position={[0, 0, -12]}/>
                <MovingTrapRound position={[0, 0, -15]}/>
            </RigidBody>


    );
}
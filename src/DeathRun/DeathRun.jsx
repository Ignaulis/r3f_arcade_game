import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./components/Lights";
import Tunell from "./components/Tunell";
import { Physics } from "@react-three/rapier";
import SpikeRound from "./components/Traps/SpikeTraps/SpikeRound";
import MovingTrapRound from "./components/Traps/MovingTraps/MovingTrapRound";

export default function DeathRun() {

    return (
        <>
            <Canvas>
                <color args={['black']} attach={'background'} />
                <OrbitControls />
                <Lights />

                <Physics debug>
                    {/* <Tunell /> */}
                    <MovingTrapRound />
                </Physics>
            </Canvas>
        </>
    );
}
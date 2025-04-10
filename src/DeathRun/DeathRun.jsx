import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./components/Lights";
import Tunell from "./components/Tunell";
import { Physics } from "@react-three/rapier";
import SpikeRound from "./components/Traps/SpikeTraps/SpikeRound";
import MovingTrapRound from "./components/Traps/MovingTraps/MovingTrapRound";
import WallTrapRound from "./components/Traps/WallTrap/WalltrapRound";
import Player from "./components/Player";

export default function DeathRun() {

    return (
        <>
            <Canvas
                camera={{
                    position: [1, 1.5, 1],
                    fov: 45,
                    near: 0.1,
                    far: 200
                }}
            >
                <color args={['black']} attach={'background'} />
                <OrbitControls />
                <Lights />

                <Physics debug>
                    <Tunell />
                    <Player />
                </Physics>
            </Canvas>
        </>
    );
}
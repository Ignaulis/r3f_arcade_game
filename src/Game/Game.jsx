import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tunell from "./components/Tunell";
import { Physics } from "@react-three/rapier";
import Player from "./components/Player";
import { Perf } from "r3f-perf";

export default function Game() {

    return (
        <>
            <Canvas
                camera={{
                    position: [1, 1.5, 1],
                    fov: 45,
                    near: 0.1,
                    far: 50
                }}
            >
                <Perf />
                <color args={['black']} attach={'background'} />
                {/* <OrbitControls /> */}
                <Physics >
                    <Tunell />
                    <Player />
                </Physics>
            </Canvas>
        </>
    );
}
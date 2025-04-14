import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tunell from "./components/Tunell";
import { Physics } from "@react-three/rapier";
import Player from "./components/Player";
import { Perf } from "r3f-perf";
import { ShipContextProvider } from "./context/GameContext";
import GameOver from "./components/GameOver";
import { Suspense } from "react";
import Loader from "./components/Loader";
import GameStart from "./components/GameStart";
import Points from "./components/Points";
import About from "./components/About";

export default function Game() {

    return (
        <ShipContextProvider>
            <Canvas
                camera={{
                    position: [1, 1.5, 1],
                    fov: 45,
                    near: 0.1,
                    far: 50
                }}
            >
                <Suspense fallback={<Loader />}>
                    <Perf />
                <color args={['black']} attach={'background'} />
                {/* <OrbitControls /> */}
                <Physics>
                    <Tunell />
                    <Player />
                </Physics>
                <GameOver />
                <GameStart />
                </Suspense>
                
            </Canvas>
            <Points />
            <About />
            
        </ShipContextProvider>
    );
}
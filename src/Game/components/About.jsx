import { useContext } from "react";
import { ShipContext } from "../context/GameContext";

export default function About() {

    const { about, isMobile } = useContext(ShipContext)

    return (
        <>
            {
                about &&
                <div className="about" style={isMobile ? {alignItems: 'start', marginTop: '10px'} : null}>
                    <div className="about-con" style={isMobile ? {height: '40%'} : null}>
                        <h2>🚀 About the Game: Alien Trap Run</h2>
                        <span>Alien Tunnel Run is a fast-paced 3D arcade game built with React Three Fiber, where you pilot an alien spaceship through an endless tunnel filled with randomly generated traps and obstacles.</span>
                        <span>Your mission: Dodge the traps and travel as far as possible without crashing. The further you go, the higher your score.</span>
                        <h3>🎮 Gameplay Features</h3>
                        <span>Randomly Generated Obstacles: Every run is different thanks to procedurally generated traps and tunnel elements.</span>
                        <span style={{ fontWeight: '700', marginBottom: '5px', marginTop: '5px' }}>Simple Controls:</span>
                        <span>Arrow Keys to steer the spaceship.</span>
                        <span>Spacebar to boost your speed.</span>
                        <span style={{ fontWeight: '700', marginBottom: '5px', marginTop: '5px' }}>Mobile-Friendly:</span>
                        <span>On-screen touch controls appear when playing on mobile.</span>
                        <span>Tap arrows to steer and hold the boost button to accelerate.</span>
                        <h3>🛠️ Built With</h3>
                        <span>react-three/fiber</span>
                        <span>react-three/drei</span>
                        <span>react-three/rapier</span>
                        <span>r3f-perf</span>
                        <span>Three.js</span>
                        <span>React 19</span>

                    </div>
                </div>
            }
        </>

    );
}
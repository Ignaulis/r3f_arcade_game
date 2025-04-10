import SpikeFloor from "./SpikeFloor";

export default function SpikeRound({position = [0, 0, 0]}) {

    return(
        <mesh
            position={position}
        >
            <SpikeFloor rotation={[0, 0, 0]} position={[0, -0.65, 0]}/>
            <SpikeFloor rotation={[Math.PI, 0, 0]} position={[0, 2.65, 2]}/>
            <SpikeFloor rotation={[0, Math.PI, Math.PI / 2]} position={[-0.65, 0, 2]}/>
            <SpikeFloor rotation={[0, 0, Math.PI / 2]} position={[2.65, 0, 0]}/>
        </mesh>
    );
}
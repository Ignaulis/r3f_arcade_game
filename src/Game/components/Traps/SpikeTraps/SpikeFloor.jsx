import SpikeTrap from "./SpikeTrap";
import Block from "../../Blocks/Block";
import { useMemo } from "react";


export default function SpikeFloor({ position = [0, 0, 0], rotation = [0, 0, 0] }) {

    const randomPositionSpiked = useMemo(() => {
        const x = Math.floor(Math.random() * 3)
        const y = 0
        const z = Math.floor(Math.random() * 3)

        return [x, y, z]
    },[])

    const randomChance = useMemo(() =>Math.random() > 0.4,[])
    

    return (
        <mesh
            {...{ position, rotation }}
        >
            <Block position={[0, 0, 0]} />
            <Block position={[1, 0, 0]} />
            <Block position={[2, 0, 0]} />
            <Block position={[0, 0, 1]} />
            {
                randomChance && <SpikeTrap position={randomPositionSpiked} />
            }
            <Block position={[0, 0, 2]} />
            <Block position={[1, 0, 1]} />
            <Block position={[2, 0, 2]} />
            <Block position={[1, 0, 2]} />
            <Block position={[2, 0, 1]} />
        </mesh>
    );
}
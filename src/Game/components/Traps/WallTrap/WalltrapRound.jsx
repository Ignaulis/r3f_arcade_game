import BlockStart from "../../Blocks/Block";
import RoundBlock from "../../Blocks/RoundBlock";

export default function WallTrapRound({position = [0, 0, 0]}) {

    const randomPosition = () => [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3)
    ]

    const position1 = randomPosition()
    const position2 = randomPosition()

    return(
        <group
            position={position}
        >
            <mesh>
                <RoundBlock />
            </mesh>
            <mesh>
                <BlockStart
                    rotation={[Math.PI /2, 0, 0]}
                    position={position1}
                    color='yellow'
                    lineWidth={2}
                />
            </mesh>
            <mesh>
                <BlockStart
                    rotation={[Math.PI /2, 0, 0]}
                    position={position2}
                    color='yellow'
                    lineWidth={2}
                />
            </mesh>
        </group>
    );
}
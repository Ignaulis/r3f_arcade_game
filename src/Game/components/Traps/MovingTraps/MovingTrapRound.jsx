import Blocks from "../../Blocks/Blocks";
import MovingTrap from "./MovingTrap";
import { useMemo } from "react";

export default function MovingTrapRound({ position = [0, 0, 0] }) {

    const trapPosition = useMemo(() => Math.random() < 0.5, [])

    return (
        <mesh
            position={position}
        >
            {
                trapPosition ?
                    (<>
                        <MovingTrap trapPosition={trapPosition} rotation={[0, 0, 0]} position={[0, -0.65, 0]} />
                        <Blocks rotation={[0, 0, Math.PI / 2]} position={[-0.65, 0, 0]} />
                    </>
                    )
                    :
                    (<>
                        <Blocks rotation={[0, 0, 0]} position={[0, -0.65, 0]} />
                        <MovingTrap trapPosition={trapPosition} rotation={[0, Math.PI, Math.PI / 2]} position={[-0.65, 0, 2]} />
                    </>
                    )
            }
            <Blocks rotation={[0, 0, 0]} position={[0, 2.65, 0]} />
            <Blocks rotation={[0, 0, Math.PI / 2]} position={[2.65, 0, 0]} />
        </mesh>
    );
}
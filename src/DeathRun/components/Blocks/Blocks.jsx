import Block from "./Block";

export default function Blocks({ rotation = [0, 0, 0], position = [0, 0, 0] }) {

    return (
        <mesh
            // rotation={rotation}
            // position={position}
            {...{rotation, position}}
        >
            <Block position={[0, 0, 0]} />
            <Block position={[1, 0, 0]} />
            <Block position={[2, 0, 0]} />
            <Block position={[0, 0, 1]} />
            <Block position={[0, 0, 2]} />
            <Block position={[1, 0, 1]} />
            <Block position={[2, 0, 2]} />
            <Block position={[1, 0, 2]} />
            <Block position={[2, 0, 1]} />
        </mesh>

    );
}
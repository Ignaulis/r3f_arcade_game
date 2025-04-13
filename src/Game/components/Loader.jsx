import { Html, useProgress } from "@react-three/drei";

export default function Loader() {

    const { progress } = useProgress()

    return (
        <Html>
            <div style={{
                color: 'white',
                fontSize: '1.5rem',
                textAlign: 'center',
                fontFamily: 'sans-serif',
                background: 'rgba(0,0,0,0.8)',
                padding: '1em 2em',
                borderRadius: '10px'
            }}>
                Loading...<br />
                {progress.toFixed(0)}%
            </div>
        </Html>
    );
}
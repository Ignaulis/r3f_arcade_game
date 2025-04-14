import { Html } from "@react-three/drei";

export default function Loader() {

    return (
        <Html fullscreen>
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontFamily: 'sans-serif',
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '1em 2em',
                    borderRadius: '10px',
                    fontSize: '3rem'
                }}>
                    Loading...
                </div>
            </div>
        </Html>
    );
}

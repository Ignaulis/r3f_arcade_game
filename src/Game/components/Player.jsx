import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three'
import { Controls } from "./Controls";
import { ShipContext } from "../context/GameContext";
import { shipParams } from "./Logic";

export default function Player() {


    const [color, setColor] = useState('cyan')
    const controls = Controls()
    const ship = useGLTF('./ship/scene.gltf')
    const shipRef = useRef()
    const { shipBody, setGameOver, play, setPlay, restart, setRestart, scoreRef, setShowPoints, setAlert } = useContext(ShipContext)
    const { camera } = useThree()
    const [cameraPosGO, setCameraPosGO] = useState(4)
    const [gravity, setGravity] = useState(true)
    const [freze, setFreze] = useState(false)
    const [cameraStart, setCameraStart] = useState(8)


    const cameraOffset = new THREE.Vector3(cameraStart, 0.4, cameraPosGO)
    const cameraLerp = 0.1

    useFrame((_, delta) => {

        if (freze) return

        const shipRotate = shipRef.current.rotation
        shipRotate.y += delta * 2

        // camera
        if (shipBody.current) {

            const position = shipBody.current.translation()
            const cameraBasePosition = new THREE.Vector3().copy(position)
            cameraBasePosition.x = position.x + 1
            const targetCamera = new THREE.Vector3()
                .copy(cameraBasePosition)
                .add(cameraOffset)
            camera.position.lerp(targetCamera, cameraLerp)
            camera.lookAt(cameraBasePosition)

            const velocity = new THREE.Vector3(0, 0, -shipParams.baseSpeed)

            // controls
            if (controls.ArrowLeft) {
                velocity.x -= shipParams.straveSpeed

                if (shipRotate.z < 0.2) {
                    shipRotate.z += 0.01
                }

                shipRotate.y = 0
            } else if (controls.ArrowRight) {
                velocity.x += shipParams.straveSpeed
                if (shipRotate.z > -0.2) {
                    shipRotate.z -= 0.01
                }

                shipRotate.y = 0
            } else {

                if (shipRotate.z > 0) {
                    shipRotate.z -= 0.01
                } else if (shipRotate.z < 0) {
                    shipRotate.z += 0.01
                }
            }

            if (controls.ArrowUp) {
                velocity.y += shipParams.straveSpeed

                if (shipRotate.x < 0.2) {
                    shipRotate.x += 0.02

                }
            } else if (controls.ArrowDown) {
                velocity.y -= shipParams.straveSpeed

                if (shipRotate.x > -0.2) {
                    shipRotate.x -= 0.02
                }
            } else {

                if (shipRotate.x > 0) {
                    shipRotate.x -= 0.01
                } else if (shipRotate.x < 0) {
                    shipRotate.x += 0.01
                }
            }

            if (controls.Space) {
                velocity.z -= shipParams.boostSpeed
                setColor('crimson')
                shipRotate.y += delta * 4
            } else {
                setColor('cyan')
                shipRotate.y += delta * 2
            }

            shipBody.current.setLinvel({
                x: velocity.x,
                y: velocity.y,
                z: velocity.z
            },
                true
            )

            //points
            scoreRef.current = -position.z + 1

        }
    })

    // collision
    const onCollision = e => {
        if (e && shipBody.current) {
            shipParams.baseSpeed = 0
            setGameOver(true)
            setCameraPosGO(4)
            setGravity(true)
            setFreze(true)
            setShowPoints(true)
            shipBody.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
            shipBody.current.setAngvel({ x: 0, y: 0, z: 0 }, true)
        }
    }

    //restart key
    useEffect(() => {
        if (controls.KeyR) {
            setRestart(true)
        }
    }, [controls.KeyR, setRestart])

    //PLAY
    useEffect(() => {
        if (play) {
            setCameraPosGO(2)
            setRestart(false)
            setPlay(true)
            setShowPoints(false)
            setAlert(false)
            setCameraStart(0)
            setTimeout(() => {
                setGravity(false)
                shipParams.baseSpeed = 6;
            }, 2000)
        }
    }, [play, setRestart, setPlay])

    //RESTART
    useEffect(() => {
        if (restart && shipBody.current) {
            setCameraPosGO(4)
            setGravity(true)
            setGameOver(false)
            setPlay(false)
            shipBody.current.setTranslation({ x: 0, y: 1.45, z: 1 }, true)
            shipBody.current.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true)
            shipBody.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
            shipBody.current.setAngvel({ x: 0, y: 0, z: 0 }, true)
            shipRef.current.rotation.set(0, 0, 0)
            setFreze(false)

            setTimeout(() => {
                setPlay(false)
            }, 500)
        }

    }, [restart, setPlay, shipBody, setGameOver])


    return (
        <>
            <RigidBody
                ref={shipBody}
                colliders='hull'
                type='dynamic'
                mass={1}
                gravityScale={gravity ? 0 : 1}
                linearDamping={0.1}
                angularDamping={0.1}
                position={[0, 1.45, 1]}
                onCollisionEnter={onCollision}
            >
                <primitive
                    ref={shipRef}
                    object={ship.scene}
                    scale={0.08}
                    position={[1, 0, 0]}
                />
            </RigidBody>
            <directionalLight
                position={[1, 0.7, 2]}
                intensity={15}
                color={color}
            />
        </>
    );
}
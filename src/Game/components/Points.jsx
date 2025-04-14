import { useContext, useEffect } from "react";
import { ShipContext } from "../context/GameContext";


export default function Points() {

    const { points, setPoints, scoreRef, showPoints, hiscore, setHiscore, alert, setAlert, isMobile, gameOver, about } = useContext(ShipContext)

    useEffect(() => {
        const currentPoints = Math.floor(scoreRef.current)
        setPoints(currentPoints)
        if (currentPoints > hiscore) {
            setHiscore(currentPoints)
            setAlert(true)
            localStorage.setItem('hiscore', JSON.stringify(currentPoints))
        }

    }, [scoreRef.current])

    useEffect(() => {
        const score = JSON.parse(localStorage.getItem('hiscore'))
        if (score) {
            setHiscore(score)
        } else {
            setHiscore(0)
        }
    }, [])




    return (
        <>
            {
                showPoints && !about && (

                    <div className="pointsGap">
                        <div
                            className="points"
                            style={isMobile ? { fontSize: '1.2rem' } : { fontSize: '2.5rem' }}
                        >
                            <div className="score">Points: {points.toFixed(0)}</div>
                            <div className="hiscore">Hiscore: {hiscore}</div>
                            {alert ? <span className="hiscoreAlert">New HISCORE!</span> : null}
                        </div>
                        {!gameOver &&
                            <div
                                className="rules"
                                style={isMobile ? { fontSize: '1.2rem', top: '25%' } : { fontSize: '2.5rem', top: '25%' }}
                            >
                                {

                                    isMobile ?
                                        <>
                                            <span>Controls</span>
                                            <p>
                                                Arrow Buttons for movement
                                            </p>
                                            <p>
                                                Hold Boost for speed increase
                                            </p>
                                        </>
                                        :
                                        <>
                                            <span>Controls</span>
                                            <p>
                                                Arrow Keys for movement and menu
                                            </p>
                                            <p>
                                                Hold space for boost and select for menu
                                            </p>
                                        </>
                                }
                            </div>
                        }
                    </div>
                )
            }

        </>

    );
}
import { useContext, useEffect } from "react";
import { ShipContext } from "../context/GameContext";


export default function Points() {

    const { points, setPoints, scoreRef, showPoints, hiscore, setHiscore, alert, setAlert } = useContext(ShipContext)

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
        if(score) {
            setHiscore(score)
        } else {
            setHiscore(0)
        }
    }, [])




    return (
        <>
            {
                showPoints &&
                <div className="pointsGap">
                    <div
                    className="points"
                >
                    <div className="score">Points: {points.toFixed(0)}</div>
                    <div className="hiscore">Hiscore: {hiscore}</div>
                    {alert ? <span className="hiscoreAlert">New HISCORE!</span> : null}
                </div>
                <div className="rules">
                    <span>Controls</span>
                    <p>
                        Arrow Keys for movement and select (menu)
                    </p>
                    <p>
                        Space for boost and select (menu)
                    </p>
                </div>
                </div>
                
            }

        </>

    );
}
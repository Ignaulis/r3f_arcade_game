import { useContext } from "react";
import { ShipContext } from "../context/GameContext";

export default function MobileKeys() {

    const { isMobile, play, gameOver, setRestart } = useContext(ShipContext)

    const triggerClick = e => {
        window.dispatchEvent(new KeyboardEvent('keydown', { code: e }))
    }
    const triggerRealese = e => {
        window.dispatchEvent(new KeyboardEvent('keyup', { code: e }))
    }


    return (
        <>
            {gameOver && isMobile ?
                <div className="mobile">
                    <div className="first">
                        <div
                            className="restart"
                            onClick={() => setRestart(true)}
                        >Restart</div>
                    </div>

                </div>
                :
                play && isMobile &&
                <div className="mobile">
                    <div className="first">
                        <button
                            className="left"
                            onTouchStart={() => triggerClick('ArrowLeft')}
                            onTouchEnd={() => triggerRealese('ArrowLeft')}
                        >←</button>
                    </div>
                    <div className="second">
                        <button
                            className="up"
                            onTouchStart={() => triggerClick('ArrowUp')}
                            onTouchEnd={() => triggerRealese('ArrowUp')}
                        >↑</button>
                        <button
                            className="down"
                            onTouchStart={() => triggerClick('ArrowDown')}
                            onTouchEnd={() => triggerRealese('ArrowDown')}
                        >↓</button>

                    </div>
                    <div className="third">
                        <button
                            className="right"
                            onTouchStart={() => triggerClick('ArrowRight')}
                            onTouchEnd={() => triggerRealese('ArrowRight')}
                        >→</button>

                    </div>
                    <div className="boost">
                        <button
                            className="boostas"
                            onTouchStart={() => triggerClick('Space')}
                            onTouchEnd={() => triggerRealese('Space')}
                        >Boost</button>
                    </div>
                </div>
            }


        </>

    );
}
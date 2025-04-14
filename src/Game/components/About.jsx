import { useContext } from "react";
import { ShipContext } from "../context/GameContext";

export default function About() {

    const { about } = useContext(ShipContext)

    return (
        <>
            {
                about &&
                <div className="about">
                    <p>
laba diena
                    </p>
                </div>
            }
        </>

    );
}
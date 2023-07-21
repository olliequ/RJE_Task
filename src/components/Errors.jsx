import React from "react"

export default function Errors(props) {
    // const styles = {
    //     backgroundColor: props.isHeld ? "#59E391" : "white",
    // }
    return (
        <div 
            // // className="die-face"
            // className={props.isHeld ? "die-face rise-shake" : "die-face"}
            // style={styles}
            // onClick={props.holdDice}
        >
            <h1>Error #{props.index+1}</h1>
            <div className="error-values">
                <h2 className="error-value">Message: {props.message}</h2>
                <h2 className="error-value">Value: {props.value}</h2>
                <h2 className="error-value">Line: {props.line}</h2>
            </div>
        </div>
    )
}
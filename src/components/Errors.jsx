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
            <h1 style={{ 'font-size': '30px', 'text-decoration': 'underline'}}>Error #{props.index+1}</h1>
            <div className="error-values">
                <h2 className="error-value"><span style={{ color: 'blue' }}>Message:</span> <span style={{ 'font-style': 'italic' }}>{props.message}</span></h2>
                <h2 className="error-value"><span style={{ color: 'blue' }}>Value:</span> {props.value}</h2>
                <h2 className="error-value"><span style={{ color: 'blue' }}>Line:</span> {props.line}</h2>
            </div>
        </div>
    )
}
import React from "react"

export default function Errors(props) {
    const styles = {
        backgroundColor: props.index % 2 == 0 ? "#B1DEE0" : "#D6F7D2",
    }
    return (
        <div>
            <h1 style={{ 'font-size': '30px', 'text-decoration': 'underline'}}>Error #{props.index+1}</h1>
            <div className="error-values" style={styles}>
                <h2 className="error-value"><span style={{ color: 'blue' }}>Message:</span> <span style={{ 'font-style': 'italic' }}>{props.message}</span></h2>
                <h2 className="error-value"><span style={{ color: 'blue' }}>Value:</span> {props.value}</h2>
                <h2 className="error-value"><span style={{ color: 'blue' }}>Line:</span> {props.line}</h2>
            </div>
        </div>
    )
}
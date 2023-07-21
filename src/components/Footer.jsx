import React from "react"
import githIcon from '../assets/gith-icon.png'

function Footer() {
    return (
        <div className="footer">
            <a>Built with 💙 by <a href="https://github.com/olliequ/RJE_Task" target="_blank">Ollie for RJE Global</a></a>
            <img src={githIcon} alt="GitHub icon" height={16} padding={50}/>
        </div>
    )
}

export default Footer
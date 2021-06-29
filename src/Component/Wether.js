import React from 'react'
import '../style/style.css'

const Weather = (props) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center main-Box">
                <div>
                    <h2 className="text-center mb-3">Your Location weather</h2>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <img className="" src={props.iconSrc} alt="alt"></img>
                    </div>
                    <h2 className="text-center mb-3">{props.Temp}&deg;</h2>
                    <h2 className="text-center">{props.TempText}</h2>
                </div>
            </div>
        </div>
    )
}
export default Weather

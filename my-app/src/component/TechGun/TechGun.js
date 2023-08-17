import React from "react";
import ExpenceDate from "./ExpenceDate";
import './TechGun.scss'

function Techgun(props){
   

    return(
        <>
            <div className="expence-section">
               <ExpenceDate date={props.date}/>
                <div className="expence-desc">
                    <h4 className="expence-items">{props.title}</h4>
                    <span className="expence-price">${props.price}</span>
                </div>
            </div>
        </>
    )
}

export default Techgun;
import React from "react"
import './ExpenceDate.scss';

function ExpenceDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return(
        <>
            <h3 className="expence-date">{day}, {month} {year}</h3>
        </>
    )
}

export default ExpenceDate;
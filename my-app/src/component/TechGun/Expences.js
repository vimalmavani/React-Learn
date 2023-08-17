import React from 'react';
import Techgun from './TechGun';
import './Expences.scss';

function Expences(props){
    return(
        <>
            {props.item.map((element, index) => {
                return <Techgun date={ element.date } title={ element.title } price={ element.price }  key={index}/>
            })}
        </>
    )
}
export default Expences;
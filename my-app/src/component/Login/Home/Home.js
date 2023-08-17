import React from "react";
import './Home.scss';

const staticData = [
    {name:"Aesha", age: "50"},
    {name:"Hardik", age: "30"}
]

function Data(props){
    return(
        <>
        <div>Name : {props.name}, Age: {props.age}</div>
        </>
    )
}

function Home(){
    return(
        staticData.map((element ,index) => {
            return(
                <>
                    <Data name={element.name} age={element.age} key={index} />
                </>
            )
        })
    )
}
export default Home;
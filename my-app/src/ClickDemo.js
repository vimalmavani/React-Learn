import React, {useState} from "react";

function Popup(){
    return(
        <>
            <h1>demo</h1>
        </>
    )
}

function ClickDemo() {
    
        const [isOpen, setIsOpen] = useState(false);
        function toggle() {
         setIsOpen((isOpen) => !isOpen);
        }
        return(
            <>
                <div className="App">
                    {isOpen && <Popup />}
                    <button onClick={toggle}>Toggle show</button>
                </div>
            </>
        )
    
}

export default ClickDemo;
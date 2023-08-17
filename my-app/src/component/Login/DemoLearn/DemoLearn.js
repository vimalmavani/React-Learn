import React from "react";

//Start : class and object 

class Customer{
    constructor(n){
        this.name = n;
    }
    age = 25;
    buy = () => {
        console.log(this.name)
    }
}

class GuestCustomer extends Customer{
    hello = () =>{
        console.log('hello');
    }
}
//End : class and object 

function DemoLearn(){
    let customer1 = new GuestCustomer("Vimal Mavani");
    console.log(customer1)
    customer1.buy();
    // start : sperad and rest opetaror (...)
    let list = ['Audi','Honda','BMW']
    let newlist = ['Ferrari', ...list]
    console.log(newlist);
    // End : sperad and rest opetaror (...)
    
    return(
        <>
            <h1>Demo</h1>
        </>
    )
 }
 
 
 

 
// export default DemoLearn,{DemoLearn1};
  export default DemoLearn;
 
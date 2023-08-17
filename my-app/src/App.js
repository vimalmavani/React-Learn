import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './component/Login/login';
import Home from './component/Login/Home/Home';
import './App.scss';
import '../src/Assets/css/stylesheet.scss';
import '../src/Assets/css/font.scss';
import DemoLearn from './component/Login/DemoLearn/DemoLearn';
import Expences from './component/TechGun/Expences';


function App() {
  let expences = [
    {
      id: 'e1',
      title: "school Fees",
      price : '300',
      date: new Date(2023, 3, 28)
    },{
      id: 'e2',
      title: "Car Expence",
      price : '500',
      date: new Date(2022, 11, 29)
    },{
      id: 'e3',
      title: "Books Expence",
      price : '150',
      date: new Date(2023, 4, 30)
    },{
      id: 'e4',
      title: "House Rant",
      price : '700',
      date: new Date(2021, 8, 28)
    },{
      id: 'e5',
      title: "Food",
      price : '100',
      date: new Date(2021,9, 28)
    }
        
  ]

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Techgun />} />
        <Route  path="demo" element={<DemoLearn/>} />
      </Routes> */}
      {/* <DemoLearn/>
      <DemoLearn1/> */}
      <Expences item={expences}/>
    </>
  );
}

export default App;

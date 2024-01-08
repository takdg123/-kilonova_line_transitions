
import React, { useState } from 'react';
import NavBar from './navigate';
import MainFrame from './main';
import type { MetaFunction } from "@remix-run/node";
import Footer from "./footer"
export const meta: MetaFunction = () => {
  return [
    { title: "Line Transitions in Kilonova" },
    { name: "description", content: "Line Transitions in Kilonova" },
  ];
};


const Index: React.FC = () => {
 
  return (
    <div>
      <NavBar value="1"/>
      <div style={{marginRight: "30px", marginLeft: "30px"}}>
        <MainFrame/>
      </div>
      <Footer/>
    </div>
  );
}


export default Index;
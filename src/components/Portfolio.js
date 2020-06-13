import React, { Component } from 'react';
import Nav from "./Nav.js";
import Research from "./Research.js"
import Footer from "./Footer.js"
import People from "./People.js";
import Publication from "./Publication.js";

class Portfolio extends Component{
    render(){
        return (
            <div className="Portfolio"> 
                <Nav />
                {/* <Research /> */}
                {/* <People /> */}
                <Publication />
                <Footer />
            </div>
        );
    }
}
 

export default Portfolio;

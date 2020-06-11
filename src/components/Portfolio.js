import React, { Component } from 'react';
import Nav from "./Nav.js";
import Research from "./Research.js"
import Footer from "./Footer.js"

class Portfolio extends Component{
    render(){
        return (
            <div className="Portfolio"> 
                <Nav />
                <Research />
                <Footer />



            </div>
        );
    }
}
 

export default Portfolio;

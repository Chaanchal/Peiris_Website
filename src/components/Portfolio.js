import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Nav from "./Nav.js";
import Research from "./Research.js"
import Footer from "./Footer.js"
import People from "./People.js";
import Publication from "./Publication.js";
import About from "./About.js";
import PublicationView from "./PublicationView.js";

const history = createHistory()

class Portfolio extends Component{
    render(){
        return (
            <div className="Portfolio">
                <Router history={history}>
                    <Nav />
                    <Switch>
                        <Route exact component={Research} pattern="/" />
                        <Route exact component={Publication} pattern="/publication" />
                        <Route exact component={People} pattern="/people" />
                        {/* <Route component={Page404} /> */}
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}
 

export default Portfolio;

import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import "../index.css";

class Nav extends Component {
    render() {
        return(
            <div className="Nav">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink class="navbar-brand" to="/">
                        <img src={require('../logo.svg')} height="50px" width="50px" />
                    </NavLink>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/" >Research</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/publications">Publications</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/people">People</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                            </li>
                            
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/publicationView">PublicationView</NavLink>
                            </li>
                            {/* <li class="nav-item">
                                <NavLink class="nav-link" to="/PeopleView">PeopleView</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
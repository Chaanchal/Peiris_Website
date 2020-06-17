import React, {Component} from "react";
import People from "./People.js";
import About from "./About.js";


class Nav extends Component {
    render() {
        return(
            <div className="Nav">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#"><img src={require('../logo.svg')} height="50px" width="50px" /></a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Research <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Publications</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./People.js">People</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
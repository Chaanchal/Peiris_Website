import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
        <div className = "Footer">
        <div class ="footer-bottom">
            <nav class="nav justify-content-center bg-dark p-2 fixed-bottom">
                <a class="nav-link active" href="#">roshan.peiris@rit.edu</a>
                <a class="nav-link" href="#">LinkedIn</a>
                <a class="nav-link" href="#">Google Scholar</a>
                <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Anything</a>
            </nav>
        </div>
        </div>

        );
    }
}

export default Footer;

import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div claasName = "About" >
                <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={require("../images/roshan.png")} class="rounded float-right" alt="..." height="250px" width="250px"></img>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5>Roshan Peiris</h5>
                        <p class="lead"> I am an Assistant Professor at the Rochester Institute of Technology (RIT). My research areas focus on Haptics, Virtual/Augmented Reality and Human Computer Interaction.</p>
                    </div>
                    </div>
                </div>
            </div>

            </div>

        );
    }
}
export default About;
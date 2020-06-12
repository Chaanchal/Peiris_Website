import React, { Component } from 'react';

class Publication extends Component{
    render(){
        return(
            <div className = "Publication">
            <h1 class="display-4">Publication</h1>
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">Publication title</h5>
                            <p class="card-text">Details : With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <img src={require("../images/project1.jpg")} class="rounded mx-auto d-block" alt="..." height="250px" width="250px"></img>
                        </div>
                        
                    </div>
                </div>
            </div>

        );
    }
}
export default Publication;

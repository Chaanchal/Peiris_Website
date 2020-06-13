import React, { Component } from 'react';

class PublicationCard extends Component{
    render(){
        return(
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
                    <img src={require("../images/project1.jpg")} class="rounded mx-auto d-block" alt="..." height="150px" width="150px"></img>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PublicationCard;
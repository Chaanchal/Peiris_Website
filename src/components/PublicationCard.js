import React, { Component } from 'react';
import { FaTrophy } from "react-icons/fa";

class PublicationCard extends Component{
    render(){
        return(
            <div class="card mb-3 ">
                <div class="row no-gutters ">
                    <div class="col-md-8 m-auto p-auto">
                        <div class="card-body">
                        <h4 class="card-title d-flex">Publication title <FaTrophy class="ml-auto" /></h4> 

                        <h6 class="card-text">Conference : ACM CHI </h6>
                        <h6 class="card-text">Authors : John Doe, John Doe</h6>
                        <p class="card-text">Details : With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content</p>
                        <a href="#" class="btn btn-primary">View</a> {' '}
                        <a href="#" class="btn btn-secondary">Paper</a>{' '}
                        <a href="#" class="btn btn-secondary">Link</a>{' '}
                        </div>
                    </div>
                    <div class="col-md-4">
                    <img src={require("../images/project1.jpg")} class="rounded mx-auto d-block" alt="..." height="100%" width="50%"></img>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PublicationCard;
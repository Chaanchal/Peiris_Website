import React, { Component } from 'react';

class PeopleCard extends Component{
    render(){
        return(
            <div class="card">
                <img src={require("../images/people.jpg")} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text">Name</p>
                    <p class="card-text">Profession</p>
                </div>
            </div>
        );
    }
}

export default PeopleCard;
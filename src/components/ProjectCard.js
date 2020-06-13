import React, { Component } from 'react';

class ProjectCard extends Component{
    render(){
        return(
            <div class="card">
                <img src={require("../images/project1.jpg")} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text">Seeing Haptics</p>
                    <a href="#" class="badge badge-primary">Accessibility</a>
                    <a href="#" class="badge badge-secondary">Haptics</a>
                </div>
            </div>

        );
    }

}

export default ProjectCard;
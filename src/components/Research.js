import React, { Component } from 'react';
import ProjectCard from "./ProjectCard.js"

class Research extends Component{
    render(){
        return(
        <div className = "Research">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Altered Reality Lab</h1>
                </div>
            </div>

            <div class="container w-75 px-5 py-2">
                <h1 class="mx-n2  display-4">Research</h1>

                <div class="mx-n2">
                    <a href="#" class="badge badge-primary">Accessibility</a>
                    <a href="#" class="badge badge-secondary">Haptics</a>
                    <a href="#" class="badge badge-danger">Thermal</a>
                    <a href="#" class="badge badge-success">VR</a>
                </div>

                <div class="row my-3">
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                    <div class="col mx-n2">
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Research;
import React, { Component } from 'react';

class People extends Component{
    render(){
        return(
        <div className = "People">
            {/* <div class="jumbotron jumbotron-fluid"> */}
               
                    {/* <div className = "Profile image" >
                    <img src={require("../images/project1.jpg")} alt="..." height="250px" width="250px"></img>
                    <h1 class="display-4">Roshan Peiris</h1>
                    <p class="lead"> I am an Assistant Professor at the Rochester Institute of Technology (RIT). My research areas focus on Haptics, Virtual/Augmented Reality and Human Computer Interaction.</p>
                   </div> */}
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={require("../images/roshan.png")} class="rounded float-right" alt="..." height="250px" width="250px"></img>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="display-4">Roshan Peiris</h1>
                        <p class="lead"> I am an Assistant Professor at the Rochester Institute of Technology (RIT). My research areas focus on Haptics, Virtual/Augmented Reality and Human Computer Interaction.</p>
                    </div>
                    </div>
                </div>
            </div>
                
                             
           {/* <div class="row my-3">
                    <div class="col mx-n2">
                        <div class="card">
                            <img src={require("../images/project1.jpg")} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <p class="card-text">Seeing Haptics</p>
                                <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-n2">
                        <div class="card">
                            <img src={require("../images/project1.jpg")} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div> */}
           

            <div class="container w-75 px-5 py-2">
                <h1 class="mx-n2  display-4">People</h1>

                <div class="row my-3">
                    <div class="col mx-n2">
                        <div class="card">
                        <img src={require("../images/people.jpg")} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <p class="card-text">Name</p>
                                <p class="card-text">Profession</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-n2">
                        <div class="card">
                            <img src="../public/project1.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-n2">
                        <div class="card">
                            <img src="../public/project1.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-n2">
                        <div class="card">
                            <img src="../public/project1.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col mx-n2">
                        <div class="card">
                            <img src="../public/project1.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-n2">
                        <div class="card">
                            <img src="../public/project1.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-n2">
                        <div class="card">
                            <img src="../public/project1.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-n2">
                        <div class="card">
                            <img src="../public/project1.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <p class="card-text">Seeing Haptics</p>
                            <a href="#" class="badge badge-primary">Accessibility</a>
                                <a href="#" class="badge badge-secondary">Haptics</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default People;
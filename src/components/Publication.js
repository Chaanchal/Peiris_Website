import React, { Component } from 'react';
import PublicationCard from "./PublicationCard.js";

class Publication extends Component{
    render(){
        return(
            <div className = "Publication">
            <h1 class="display-4">Publication</h1>
                <PublicationCard />
                <PublicationCard />
                <PublicationCard />
                <PublicationCard />
                <PublicationCard />
            </div>

        );
    }
}
export default Publication;

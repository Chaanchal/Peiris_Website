import React, { Component } from 'react';
import { Card } from 'reactstrap';

class PeopleView extends Component{
    render(){
        return(
            <div className="PeopleView">
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../images/project1.jpg")} class="card-img-top" alt="..."/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    
                    {/* <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                </Card>
            </div>
        );
    }
}
export default PeopleView;
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { Container, Col, File,
FormGroup, Label, Input,
Button  } from 'reactstrap';

class Footer extends Component {
    render(){
        return (
        <div className = "Footer">
        <div class ="footer-bottom">
            <nav class="nav justify-content-center bg-dark p-2 fixed-bottom flex-column">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Altered Reality Lab</a>
                        <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Rochester Institute of Technology</a>
                        <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">1 Lomb Memorial drive,1440</a>
                        <a class="nav-link active" href="#"></a>
                        <a class="nav-link" href="#">Contact number</a>
                        <a class="nav-link" href="#">Address@gmail.com</a>
                    </div>
                    <div class="col-md-4 ml-auto">
                    <Form className="form">
                        <Col>
                                <FormGroup>
                                <Label>Full Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="exampleName"
                                    placeholder="John Doe"
                                />
                                </FormGroup>
                            </Col>
                        <Col>
                            <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                            <Label>Message</Label>
                            <Input
                                type="text"
                                name="Message"
                                id="exampleMessage"
                                
                            />
                            </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                    </Form>
                    </div>
                </div>
            </nav>
        </div>
        </div>

        );
    }
}

export default Footer;

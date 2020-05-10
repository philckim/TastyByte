import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class FormCreateAccount extends Component {
    render(){
        return (
            <Container>
                <Jumbotron>
                    <h2>Login Here!</h2>
                    <p>Currently Under Construction!</p>


                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter a recipe name" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                        <Form.Check
                            inline
                            disabled
                            label="3 (disabled)"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        </div>
                    ))}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>



                        
                </Jumbotron>
            </Container>   
        )
    }
}

export default FormCreateAccount;
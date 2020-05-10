import React, { Component } from 'react';
import {Jumbotron, Container, Form, Button} from 'react-bootstrap';

class CreateRecipe extends Component {
    render(){
        return (
            <Container>
                <Jumbotron>
                    <h2>Create Your Recipes Here!</h2>
                    <p>Currently under construction.</p>


                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter a recipe name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Describe your Tasty Byte..." rows="3" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control as="textarea" placeholder="Tell us what's required..." rows="3" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Instructions</Form.Label>
                        <Form.Control as="textarea" placeholder="How do you make your Tasty Byte?" rows="3" />
                    </Form.Group>

                    <Form.Label>Tags</Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Vegan" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Gluten Free" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Dairy Free" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Keto" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Paleo" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Vegetarian" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Pescatarian" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Nut Free" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Soy Free" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Chicken" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Italian" type={type} id={`inline-${type}-2`} />      
                        </div>
                    ))}
                    <div className="mb-3">
                        <Form.File id="formcheck-api-regular">
                        <Form.File.Label>Photo Upload</Form.File.Label>
                        <Form.File.Input />
                        </Form.File>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>

                </Jumbotron>
            </Container>   
        )
    }
}

export default CreateRecipe;
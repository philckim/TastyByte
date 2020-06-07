import React, { useState } from 'react';
import serialize from 'form-serialize';
import axios from 'axios';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';

const CreateRecipe = ({ user = {} }) => {
    const [error, setError] = useState(null);
    const onSubmit = async (event) => {
        event.preventDefault();

        const data = {
            ...serialize(event.target, { hash: true }),
            author: get(user, '_id')
        };
        console.log(data);
        try {
            await axios.post('http://localhost:8080/api/recipe', data);
            window.location.assign('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container>
            <Jumbotron>
                <h2>Create Your Recipes Here!</h2>
                <p>Currently under construction.</p>

                {error && <p>{error}</p>}

                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="name"
                            placeholder="Enter a recipe name"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="description">
                            Description
                        </Form.Label>
                        <Form.Control
                            name="description"
                            as="textarea"
                            placeholder="Describe your Tasty Byte..."
                            rows="3"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="ingredients">
                            Ingredients
                        </Form.Label>
                        <Form.Control
                            name="ingredients"
                            as="textarea"
                            placeholder="Tell us what's required..."
                            rows="3"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="instructions">
                            Instructions
                        </Form.Label>
                        <Form.Control
                            name="instructions"
                            as="textarea"
                            placeholder="How do you make your Tasty Byte?"
                            rows="3"
                        />
                    </Form.Group>

                    <Form.Label htmlFor="tags">Tags</Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                name="tags"
                                inline
                                label="Vegan"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Gluten Free"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Dairy Free"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Keto"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Paleo"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Vegetarian"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Pescatarian"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Nut Free"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Soy Free"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Chicken"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                name="tags"
                                inline
                                label="Italian"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                        </div>
                    ))}
                    <div className="mb-3">
                        <Form.File id="photo">
                            <Form.File.Label htmlFor="photo">
                                Photo Upload
                            </Form.File.Label>
                            <Form.File.Input name="photo" />
                        </Form.File>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </Container>
    );
};

const mapStateToProps = (state) => ({ user: state.auth.user });

export default connect(mapStateToProps)(CreateRecipe);

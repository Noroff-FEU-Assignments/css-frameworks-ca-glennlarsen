import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function ContactForm() {
    return (
        <Form className="form--container">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicWebsite">
                <Form.Label>Website</Form.Label>
                <InputGroup>
                    <InputGroup.Text className="d-none d-md-block">https://</InputGroup.Text>
                    <Form.Control type="website" />
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={10} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm;

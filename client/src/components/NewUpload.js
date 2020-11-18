import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUpload from "../components/FileUpload";
import { Form, Input, TextArea } from 'semantic-ui-react'


const NewUpload = () => {
    return (
        <div>
            <h2>Upload a new Phising!</h2>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Title'
                        placeholder='Title'
                    />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='description'
                    placeholder='description'
                />
            </Form>
            <br />
            <FileUpload />
        </div>
    )
};

export default NewUpload;

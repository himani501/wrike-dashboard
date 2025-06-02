import React from 'react';
import '../pages-scss/HomePage.css'
import api from '../Api.js'
import { Form, FormGroup, Stack, Button } from '@carbon/react'

const HomePage = () => {
    const handleConnect = async () => {
        try {
            const res = await api.post('/connect');
            if (res.data.success) {
                alert('Yayy! Connected to Wrike !!!');
            } else {
                alert('Connection failed :(');
            }
        } catch (err) {
            console.log(err);
            alert('Error connecting to account');
        }
    }

    return (
        <div>
            <Form className="Form-external">
                <FormGroup
                    legendId="form-group-1"
                    legendText="Wrike explorer"
                    className="Form-internal"
                >
                    <Stack gap={2} className="StackClass">
                        <Button className="btn1" onClick={handleConnect}>
                            Connect to wrike
                        </Button>
                        <Button className="btn2">
                            Get Wrike Tasks
                        </Button>
                    </Stack>
                </FormGroup>
            </Form>
        </div>
    )
};

export default HomePage;
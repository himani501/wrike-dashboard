import React, { useState } from 'react';
import api from '../Api.js'
import { Form, FormGroup, Stack, Button } from '@carbon/react'
import TasksTable from './TasksTable.js';
import '@carbon/styles/css/styles.css';

const HomePage = () => {
    const [isConnected, setConnect] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [data, setData] = useState([]);

    const handleConnect = async () => {
        try {
            const res = await api.post('/connect');
            if (res.data.success) {
                setConnect(true);
                alert('Yayy! Connected to Wrike !!!');
            } else {
                alert('Connection failed :(');
            }
        } catch (err) {
            console.log(err);
            alert('Error connecting to account');
        }
    }

    const handleTasks = async () => {
        if (isConnected) {
            try {
                const res = await api.get('/wrike/tasks');
                if (res.data.success) {
                    setData(res.data.data);
                    setShowTable(true);
                } else {
                    alert('No tasks exist!', res.data.message);
                }
            } catch (err) {
                alert('Error in fetching tasks.', err);
            }
        } else {
            alert('Oops!! Wrike account not connected');
        }
    }

    return (
        <div>
            <Form className="Form-external"
                style={{ justifyContent: "center", alignItems: "center" }}>
                <FormGroup
                    legendId="form-group-1"
                    legendText="Wrike explorer"
                    className="Form-internal"
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Stack gap={2} className="StackClass"
                        style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Button className="btn1" onClick={handleConnect}>
                            Connect to wrike
                        </Button>
                        <Button className="btn2" onClick={handleTasks}>
                            Get Wrike Tasks
                        </Button>

                        {showTable && (
                            <div className="table-scroll-container">
                                <TasksTable data={data} />
                            </div>
                        )}
                    </Stack>
                </FormGroup>
            </Form>
        </div >
    )
};

export default HomePage;
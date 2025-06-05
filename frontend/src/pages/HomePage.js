import React, { useState } from 'react';
import api from '../Api.js'
import { Form, FormGroup, Stack, Button } from '@carbon/react'
import TasksTable from './TasksTable.js';
import '@carbon/styles/css/styles.css';

const HomePage = () => {
    const [showTable, setShowTable] = useState(false);
    const [data, setData] = useState([]);

    const handleConnect = async () => {
        try {
            const res = await api.get('/connect');
            if (res.data.success) {
                alert('Yayy! Connected to Wrike !!!');
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                alert(err.response.data.message);
            } else {
                alert('Something went wrong');
            }
        }
    }

    const handleTasks = async () => {
        try {
            const res = await api.get('/wrike/tasks');
            if (res.data.success) {
                setData(res.data.data);
                setShowTable(true);
            }
        } catch (err) {
            if (err.response?.status === 401) {
                alert(err.response.data?.message || 'Invalid or expired token.');
            } else {
                alert(err?.response?.data?.message || 'Get task failure.');
            }
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
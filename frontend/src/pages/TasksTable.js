import React from "react";
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody, Button } from "@carbon/react";
import '@carbon/styles/css/styles.css';
import Comment from "./Comment";
// import '../PagesStyles/TasksTable.css';
import { useState } from "react";

const TasksTable = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    const addComment = (taskID) => {
        setSelectedTaskId(taskID);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setSelectedTaskId(null);
    };

    return (
        <div>
            <h2>Tasks</h2>
            <Table className="table1">
                <TableHead className="table-header-container">
                    <TableRow className="header-row">
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Account ID</TableHeader>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Comment</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody className="table-body">
                    {data.data && data.data.map((task) => (
                        <TableRow key={task.id} className="table-row">
                            <TableCell>{task.id}</TableCell>
                            <TableCell>{task.accountId}</TableCell>
                            <TableCell>{task.title}</TableCell>
                            <TableCell>{task.status}</TableCell>
                            <TableCell>
                                {/* Passing dynamic values as parameter to button function */}
                                <Button onClick={() => addComment(task.id)}>Add a comment</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {showModal && (
                <div>
                    <Comment taskID={selectedTaskId} onClose={closeModal} />
                </div>
            )}
        </div>
    );
};

export default TasksTable;

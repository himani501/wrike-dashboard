import React from "react";
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody, Button } from "@carbon/react";
import '@carbon/styles/css/styles.css';
import AddCommentModal from "./AddCommentModal";
import GetCommentsModal from "./GetCommentsModal";
// import '../PagesStyles/TasksTable.css';
import { useState } from "react";
import api from "../Api";

const TasksTable = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [showComments, setShowComment] = useState(false);
    const [commentsData, setCommentData] = useState([]);

    const addComment = (taskID) => {
        setSelectedTaskId(taskID);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setSelectedTaskId(null);
    };

    const getComments = async (taskID) => {
        try {
            setSelectedTaskId(taskID);
            const response = await api.get(`/wrike/${taskID}/comments`);
            if (response.data.success) {
                setShowComment(true);
                setCommentData(response.data.data);
            }
        } catch (err) {
            alert('No comments exist!');
        }
    }

    const closeGetModal = () => {
        setShowComment(false);
        setSelectedTaskId(null);
    }

    return (
        <div>
            <h2>Tasks</h2>
            <Table className="table1" style={{ display: 'block' }}>
                <TableHead className="table-header-container"
                    style={{ display: 'table', width: '80%', tableLayout: 'fixed' }}>
                    <TableRow className="header-row">
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Account ID</TableHeader>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Add Comment</TableHeader>
                        <TableHeader>Get Comments</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody className="table-body"
                    style={{ display: 'block', maxHeight: '500px', overflowY: 'auto', width: '80%' }}>
                    {data.data && data.data.map((task) => (
                        <TableRow key={task.id} className="table-row"
                            style={{ display: 'table', width: '80%', tableLayout: 'fixed' }}>
                            <TableCell>{task.id}</TableCell>
                            <TableCell>{task.accountId}</TableCell>
                            <TableCell>{task.title}</TableCell>
                            <TableCell>{task.status}</TableCell>
                            <TableCell>
                                {/* Passing dynamic values as parameter to button function */}
                                <Button onClick={() => addComment(task.id)}>Add a comment</Button>
                            </TableCell>
                            <TableCell>
                                {/* Passing dynamic values as parameter to button function */}
                                <Button onClick={() => getComments(task.id)}>Get comments</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {showModal && (
                <div>
                    <AddCommentModal taskID={selectedTaskId} onClose={closeModal} />
                </div>
            )}

            {showComments && (
                <div>
                    <GetCommentsModal data={commentsData} onClose={closeGetModal} />
                </div>
            )}
        </div>
    );
};

export default TasksTable;

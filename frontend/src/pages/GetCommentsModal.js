import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@carbon/react";
import React from "react";
import '@carbon/styles/css/styles.css';

const GetCommentsModal = ({ data, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Comments: </h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Comment ID</TableHeader>
                            <TableHeader>Task ID</TableHeader>
                            <TableHeader>Text</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.data && data.data.map((task) =>
                            <TableRow key={task.id}>
                                <TableCell>{task.id}</TableCell>
                                <TableCell>{task.taskId}</TableCell>
                                <TableCell>{task.text}</TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
                <Button type="button" onClick={onClose}>Close</Button>
            </div>
        </div>
    )
};

export default GetCommentsModal;
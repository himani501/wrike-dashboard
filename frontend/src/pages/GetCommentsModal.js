import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@carbon/react";
import React from "react";
import '@carbon/styles/css/styles.css';

const GetCommentsModal = ({ data, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Comments: </h3>
                <Table className="table1" style={{ display: 'block' }}>
                    <TableHead className="table-header-container"
                        style={{ display: 'table', width: '50%', tableLayout: 'fixed' }}>
                        <TableRow>
                            <TableHeader>Comment ID</TableHeader>
                            <TableHeader>Task ID</TableHeader>
                            <TableHeader>Text</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody className="table-body"
                        style={{ display: 'block', maxHeight: '200px', overflowY: 'auto', width: '50%' }}>
                        {data.data && data.data.map((task) =>
                            <TableRow key={task.id} className="table-row"
                                style={{ display: 'table', width: '50%', tableLayout: 'fixed' }}>
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
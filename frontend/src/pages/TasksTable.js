import React from "react";
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody, Button } from "@carbon/react";
// import '../PagesStyles/TasksTable.css';
import '@carbon/styles/css/styles.css'

const TasksTable = ({ data }) => {
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
                                <Button>Add a comment</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TasksTable;

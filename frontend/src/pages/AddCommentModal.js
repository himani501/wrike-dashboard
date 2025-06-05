import React, { useState } from "react";
import '@carbon/styles/css/styles.css';
import { Modal, TextInput } from "@carbon/react";
import Alert from '@mui/material/Alert';
import api from '../Api.js';

const AddCommentModal = ({ taskID, onClose }) => {
    const [textComment, setComment] = useState(null);
    const [alertVisibility, setAlertVisibility] = useState(false);

    const addComment = async (e) => {
        e.preventDefault(); // prevent form submit/reload
        try {
            const response = await api.post(`/wrike/${taskID}/comments`, {
                text: textComment
            });

            if (response.data.success) {
                setAlertVisibility(true);
            }
        } catch (err) {
            alert("Some issue with adding the comment.");
        }
    }
    return (
        <Modal
            modalHeading={`Add a comment to task: ${taskID}`}
            modalLabel=""
            primaryButtonText="Add"
            secondaryButtonText="Cancel"
            open="true"
            onRequestClose={onClose}
            onRequestSubmit={(e) => addComment(e)}>
            <TextInput
                labelText="Text"
                onChange={e => setComment(e.target.value)}
                onClick={() => { setAlertVisibility(false) }}
                placeholder="Enter comment text"
                value={textComment}
                type="text" />
            {alertVisibility && <Alert severity="success">Added the comment.</Alert>}
        </Modal>
    );
};

export default AddCommentModal;

import React, { useState } from "react";
import "../PagesStyles/ModalStyles.css";
// import { Modal, Select, SelectItem, TextInput } from "@carbon/react";
import '@carbon/styles/css/styles.css';
import { TextInput } from "@carbon/react";
import api from '../Api.js';

const AddCommentModal = ({ taskID, onClose }) => {
    const [textComment, setComment] = useState(null);

    const addComment = async (e) => {
        e.preventDefault(); // prevent form submit/reload
        try {
            const response = await api.post(`/wrike/${taskID}/comments`, {
                text: textComment
            });

            if (response.data.success) {
                alert('Comment added!!');
            } else {
                alert('Some issue with adding the comment.');
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Task ID: {taskID}</h3>
                <TextInput
                    className="input-test-class"
                    defaultWidth={300}
                    id="text-input-1"
                    invalidText="Error message goes here"
                    labelText="Text"
                    onChange={e => setComment(e.target.value)}
                    placeholder="Enter comment text"
                    size="md"
                    value={textComment}
                    type="text"
                    warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
                    style={{ marginBottom: "1.5rem" }}
                />
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                    <button type="button" className="close-btn" onClick={onClose}>Close</button>
                    <button type="button" className="add-btn" onClick={(e) => addComment(e)}>Add</button>
                </div>
            </div>
        </div>
        // <div>
        //     <Modal modalHeading="Add a custom domain" modalLabel="Account resources"
        //         numberOfButtons="Two" primaryButtonText="Add" closeButtonLabel="Cancel" onRequestClose={onClose}>
        //         <p style={{
        //             marginBottom: '1rem'
        //         }}>
        //             Custom domains direct requests for your apps in this Cloud Foundry
        //             organization to a URL that you own. A custom domain can be a shared
        //             domain, a shared subdomain, or a shared domain and host.
        //         </p>
        //         <TextInput data-modal-primary-focus id="text-input-1" labelText="Domain name" placeholder="e.g. github.com" style={{
        //             marginBottom: '1rem'
        //         }} />
        //         <Select id="select-1" defaultValue="us-south" labelText="Region">
        //             <SelectItem value="us-south" text="US South" />
        //             <SelectItem value="us-east" text="US East" />
        //         </Select>
        //     </Modal>
        // </div>
    );
};

export default AddCommentModal;

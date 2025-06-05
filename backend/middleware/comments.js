import axios from "axios";
const WRIKE_API_BASE = 'https://www.wrike.com/api/v4';
const token = process.env.API_TOKEN;
const headers = {
    Authorization: `Bearer ${token}`
}

const postComments = async (req, res) => {
    try {
        const { taskId } = req.params; // path variable
        const { text } = req.body; // query param (e.g., ?text=comment)

        const response = await axios.post(`${WRIKE_API_BASE}/tasks/${taskId}/comments`,
            { text },// request body
            { headers });
        res.status(201).json({ success: true, data: response.data });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to post comment', error: err.message });
    }
}

const getComments = async (req, res) => {
    try {
        const { taskID } = req.params;

        const response = await axios.get(`${WRIKE_API_BASE}/tasks/${taskID}/comments`, {
            headers: headers
        });

        res.status(201).json({ success: true, data: response.data });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to get comment', error: err.message });
    }
}

export default { postComments, getComments }
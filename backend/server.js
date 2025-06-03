import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const WRIKE_API_BASE = 'https://www.wrike.com/api/v4';
const token = process.env.API_TOKEN;

app.post('/api/connect', async (req, res) => {
    try {
        // Simulating actual API call
        const response = await axios.get(`${WRIKE_API_BASE}/contacts`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        res.json({ success: true, data: response.data });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Connection failed' });
    }
});

app.get('/api/wrike/tasks', async (req, res) => {
    try {
        const response = await axios.get(`${WRIKE_API_BASE}/tasks`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        res.json({ success: true, data: response.data });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Get Tasks failure' });
    }
});

app.post(`/api/wrike/:taskID/comments`, async (req, res) => {
    try {
        const { taskID } = req.params; // path variable
        const { text } = req.body; // query param (e.g., ?text=comment)

        const response = await axios.post(`${WRIKE_API_BASE}/tasks/${taskID}/comments`,
            { text },  // request body
            { headers: { Authorization: `Bearer ${token}` } })

        res.json({ success: true, data: response.data });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Failed to post comment', error: err.message });
    }
})

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

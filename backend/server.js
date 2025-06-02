import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const WRIKE_API_BASE = 'https://www.wrike.com/api/v4';

app.post('/api/connect', async (req, res) => {
    try {
        const token = process.env.API_TOKEN;

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

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

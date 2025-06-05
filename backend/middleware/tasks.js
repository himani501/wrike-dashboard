import axios from "axios";
const WRIKE_API_BASE = 'https://www.wrike.com/api/v4';
const token = process.env.API_TOKEN;
const headers = {
    Authorization: `Bearer ${token}`
}

const getTasks = async (req, res) => {
    try {
        const response = await axios.get(`${WRIKE_API_BASE}/tasks`, {
            headers: headers
        })
        res.status(201).json({ success: true, data: response.data });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error in fetching tasks.' });
    }
}

export default getTasks;
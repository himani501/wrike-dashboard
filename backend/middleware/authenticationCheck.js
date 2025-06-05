import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const WRIKE_API_BASE = 'https://www.wrike.com/api/v4';
const token = process.env.API_TOKEN;
const headers = {
    Authorization: `Bearer ${token}`
}

const authenticationCheck = async (req, res) => {
    try {
        const response = await axios.get(`${WRIKE_API_BASE}/contacts`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        res.status(201).json({ success: true, data: response.data });
    } catch (err) {
        console.log(err.message);
        res.status(401).json({ success: false, message: 'Authentication failure.' });
    }
}

export default authenticationCheck;
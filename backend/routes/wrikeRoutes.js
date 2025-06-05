import express from 'express';
const router = express.Router();

import authenticationCheck from '../middleware/authenticationCheck.js';
import comments from '../middleware/comments.js';
import getTasks from '../middleware/tasks.js';

router.get('/connect', authenticationCheck);
router.get('/wrike/tasks', authenticationCheck, getTasks);
router.post(`/wrike/:taskID/comments`, authenticationCheck, comments.postComments);
router.get(`/wrike/:taskID/comments`, authenticationCheck, comments.getComments);

export default router;

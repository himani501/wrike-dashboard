import express from 'express';
import cors from 'cors';

import wrikeRoutes from './routes/wrikeRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("/Users/himanibhardwaj/himcodes/wrike-dashboard/frontend/build"));

app.use('/api', wrikeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// create express app
const app = express();

// Apply middlewares
app.use(cors());

const PORT = process.env.PORT || 4000;

// listen for incoming requests
app.listen(PORT, () => console.log('Server is running on port 3000'));
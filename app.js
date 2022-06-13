import express from 'express';
import cors from 'cors';
import routes from './src/routes/Pao.route.js';


const app = express();

app.use(express.json());
app.use(cors());
app.use("/padaria", routes);

export default app;

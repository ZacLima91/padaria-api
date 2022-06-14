import 'dotenv/config';
import app from './app.js';
import {connectDB} from './src/database/index.js';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on  http://localhost:${port}`);
});

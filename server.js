import app from './app.js';
import {connectDB} from './src/database';

const port = 3001;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on  http://localhost:${port}`);
});

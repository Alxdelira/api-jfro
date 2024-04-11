import app from "./src/app";
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3010;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
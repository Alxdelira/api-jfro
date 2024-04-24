import express from 'express';
import cors from 'cors';
import db from './config/db_config';
import routes from './routes/index';

function connect_db(): void {
    db.on('error', (error) => console.log(error));
    db.once('open', () => {
        console.log('Connected to database OK!');
    });
};

connect_db();
const app = express();
app.use(cors());
app.use(express.json());
routes(app);

export default app;
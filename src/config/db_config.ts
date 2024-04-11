import mongoose, { ConnectOptions } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dbUrl: string = process.env.DB_URL || "";

(async () => {
    await mongoose.connect(dbUrl, {
        useUnifiedTopology: true,
    } as ConnectOptions).then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((error : any) =>  {
        console.log("Error connecting to MongoDB", error);
    });
})();


let db = mongoose.connection;

export default db;
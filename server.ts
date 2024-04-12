import app from "./src/app";
import * as dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./src/docs/head";

dotenv.config();

const port = process.env.PORT || 3010;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
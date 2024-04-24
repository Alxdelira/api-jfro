import app from "./app";
import * as dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./docs/head";

dotenv.config();

const port = process.env.PORT || 3010;

const CSS_URL: string = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.7/swagger-ui.min.css";

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { swaggerOptions: { url: '/docs/swagger.json' }, customCss: CSS_URL }));

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
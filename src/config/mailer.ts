import nodemailer, { Transporter } from 'nodemailer';
import * as dotenv from 'dotenv';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';

dotenv.config();

interface EmailConfig {
    host: string;
    port: number;
    auth: {
        user: string;
        pass: string;
    };
}

const emailConfig: EmailConfig = {
    host: process.env.HOST_EMAIL || '',
    port: parseInt(process.env.PORT_EMAIL || '0'),
    auth: {
        user: process.env.USER_EMAIL || '',
        pass: process.env.PASS_EMAIL || ''
    }
};

const transport: Transporter = nodemailer.createTransport(emailConfig);

transport.use('compile', hbs({
    viewEngine: {
        extname: '.html', 
        partialsDir: path.resolve('./src/resources/mail/'),
        layoutsDir: path.resolve('./src/resources/mail/'),
        defaultLayout: '',
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html' 
}));

export default transport;


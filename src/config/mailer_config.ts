import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import Http from '../services/HttpStatus';
import { Response } from "express";

dotenv.config();

interface InfoEmail  {
    from: string;
    to: string;
    subject: string;
    html: string;
}
async function sendMail(infoEmail: InfoEmail, res: Response) {
    try {
        async function main() {
            let transporter = nodemailer.createTransport({
                host: process.env.HOST_EMAIL,
                port: process.env.PORT_EMAIL,
                secure: false,
                auth: {
                    user: process.env.USER_EMAIL,
                    pass: process.env.PASS_EMAIL
                }
            } as nodemailer.TransportOptions);

            await transporter.sendMail(infoEmail);
        }

        main().catch(console.error);
    } catch (error) {
        return res.status(500).json(Http[500]);
    }
}

export default sendMail;


import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const message = req.body.message;
        console.log(process.env.SENDER_EMAIL);
        console.log(process.env.SENDER_EMAIL_PWD);
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_EMAIL_PWD,
            },
        });

        // Send the email
        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: process.env.RECEIVER_EMAIL,
            subject: "Message from your Portfolio Website",
            text: message,
        });

        console.log(`Email sent`);
        res.status(200).json({ message: "Success" });

    } catch (error: any) {
        console.error(`Error sending email: ${error}`);
        res.status(500).json({ message: error.message });
    }
}
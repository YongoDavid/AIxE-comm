import {MailtrapClient}  from "mailtrap";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

export const mailtrapClient = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

// Replace email with brand email
export const sender = {
    email: "hello@demomailtrap.co",
    name: "Mailtrap Test",
};

const recipients = [
    {
        email: "davidyongo9@gmail.com"
    }
];

mailtrapClient
    .send({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        html: "congrats for sendingg test email with Mailtrap",
        category: "Integration test"
    })
    .then(console.log, console.error);

// MAKE SURE TO TEST MAIL TRAP CONFIG WITH (node mailtrapConfig.js)
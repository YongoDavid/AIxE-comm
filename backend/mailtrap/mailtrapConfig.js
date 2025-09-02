import { MailtrapClient } from mailtrap;
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({ endpoint: process.env.MAILTRAP_ENDPOINT, token: process.env.MAILTRAP_TOKEN });

// replace email with brand email
export const sender = {
    email: "mailtrap@demomailtrap.com",
    name: "Dee63",
};

// const recipients = [
//     {
//         email: "davidyongo9@gmail.com"
//     }
// ];


// client
//     .send({
//         from:sender,
//         to: recipients,
//         subject: "You are awesome!",
//         html: "congrats for sendingg test email with Mailtrap",
//         category: "Integration test"
//     })
//     .then(console.log, console.error);

// MAKE SURE TO TEST MAIL TRAP CONFIG WITH (node mailtrapConfig.js)s
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use an absolute path to the .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const mailtrapClient = new MailtrapClient({ endpoint: process.env.MAILTRAP_ENDPOINT, token: process.env.MAILTRAP_TOKEN });

// Replace email with brand email
export const sender = {
    email: "hello@demomailtrap.co",
    name: "Dave",
};
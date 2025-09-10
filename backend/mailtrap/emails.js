import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]
 
    try {
        const response= await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
            // template_uuid: "3fe2d23f-b459-4dca-91b0-96ac412e2e42",
            // template_variables: {
            // "name": name,
            // "company_info_name": "AIxE-comm"
            // }
        })
 
        console.log("Welcome email sent succesfully", response);
    } catch (error) {
        console.error(`Error sending welcome email`,error)
        throw new Error(`Error sending welcome email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email,name) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "3fe2d23f-b459-4dca-91b0-96ac412e2e42",
            template_variables: {
            "name": name,
            "company_info_name": "AI-ECOM"
            }
        })
        console.log("Welcome  Email sent succesfully", response);
    } catch (error) {
        console.error(`Error sending welcome email`, error);

        throw new Error(`Error sending welcome email: ${error}`);
    }
} 
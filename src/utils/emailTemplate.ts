export default function emailTemplate(firstName: string, lastName: string, email: string, message: string) {
    return `
        <b>
            You have received an email from ${email} with the following message:
        </b>
        <br/>
        <p>
            ${message}
        </p>
        <p><b>Sender:</b> ${firstName} ${lastName}</p>
    `
}
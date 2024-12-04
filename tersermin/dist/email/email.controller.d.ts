import { EmailService } from './email.service';
export declare class EmailController {
    private readonly mail;
    constructor(mail: EmailService);
    send(body: {
        to: string;
        subject: string;
        text: string;
    }): void;
}

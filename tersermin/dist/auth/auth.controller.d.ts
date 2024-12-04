import { UserTypeValidation } from 'src/user/dto/user-type.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: UserTypeValidation, response: Response): Promise<{
        access_token: string;
    } | {
        status: boolean;
        error: any;
    }>;
    get(request: Request): any;
}

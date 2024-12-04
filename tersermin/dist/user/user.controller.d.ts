import { UserService } from './user.service';
import { alterUserValidation, UserTypeValidation } from './dto/user-type.dto';
export declare class UserController {
    private readonly user;
    constructor(user: UserService);
    createUser(user: UserTypeValidation): Promise<{
        status: boolean;
        data: {
            username: string;
            password: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            id_user: string;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    deleteUser(user: UserTypeValidation): Promise<{
        status: boolean;
        data: {
            username: string;
            password: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            id_user: string;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    alterUser(body: alterUserValidation): Promise<{
        status: boolean;
        data: {
            username: string;
            password: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            id_user: string;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
}

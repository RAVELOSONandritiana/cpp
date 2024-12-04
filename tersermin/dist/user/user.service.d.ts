import { alterUserValidation, UserTypeValidation } from './dto/user-type.dto';
export declare class UserService {
    private readonly prisma;
    private readonly momentService;
    constructor();
    verifyUser(user: UserTypeValidation): Promise<{
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
    getId(user: UserTypeValidation): Promise<{
        status: boolean;
        id_user: string;
    } | {
        status: boolean;
        id_user?: undefined;
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

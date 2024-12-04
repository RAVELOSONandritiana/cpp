import { UserTypeValidation } from 'src/user/dto/user-type.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private readonly user;
    constructor(jwtService: JwtService);
    login(body: UserTypeValidation): Promise<{
        access_token: string;
    } | {
        status: boolean;
        error: any;
    }>;
    authenticateUser(userId: string): {
        access_token: string;
    };
}

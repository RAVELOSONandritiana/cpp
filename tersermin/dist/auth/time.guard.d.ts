import { CanActivate } from '@nestjs/common';
export declare class TimeGuard implements CanActivate {
    private readonly momentService;
    canActivate(): boolean;
}

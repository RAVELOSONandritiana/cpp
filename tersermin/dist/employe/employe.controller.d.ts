import { EmployeService } from './employe.service';
import { AlterEmployeTypeValidation, EmployeTypeValidation } from './dto/employe-types.dto';
export declare class EmployeController {
    private readonly employeService;
    constructor(employeService: EmployeService);
    addEmploye(body: EmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    alterEmploye(body: AlterEmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    checkEmploye(body: EmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
        message?: undefined;
    }>;
    deleteEmploye(body: EmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    statEmploye(date: string): Promise<{
        status: boolean;
        data: any[];
        satus?: undefined;
        error?: undefined;
    } | {
        satus: boolean;
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    triDisponibleByRoles(): Promise<{
        status: boolean;
        data: {};
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
}

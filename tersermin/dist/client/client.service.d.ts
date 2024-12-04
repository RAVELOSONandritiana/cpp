import { ClientType } from 'src/vente/types/vente.type';
type findClientInIntervalle = {
    nomClient: string;
    contact: string;
    debut: string;
    fin: string;
};
type intervalleDate = {
    debut: string;
    fin: string;
};
export declare const enum DATEFLAGS {
    YEAR = "year",
    MONTH = "month",
    DAY = "day"
}
export declare class ClientService {
    private readonly prisma;
    private readonly momentService;
    constructor();
    clientExist(client: ClientType): Promise<{
        status: boolean;
        data: {
            id_client: number;
            nomClient: string;
            contact: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    frequenceOneDay(client: ClientType, date: string): Promise<{
        status: boolean;
        nombre: number;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        nombre?: undefined;
    }>;
    frequenceClientOneMonth(client: ClientType, date: string): Promise<boolean[]>;
    frequenceClientManyMonth(client: ClientType, date: string, n: number): Promise<number[]>;
    getClients(): Promise<{
        status: boolean;
        data: {
            nomClient: string;
            contact: string;
        }[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    historiqueClientSpecifique(client: ClientType): Promise<{
        status: boolean;
        response: {
            id_vente: string;
            idProduit: string;
            idClient: number;
            nombre: string;
            prixTotal: string;
            dateVente: Date;
        }[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        response?: undefined;
    }>;
    historiqueClientInIntervalle(client: findClientInIntervalle): Promise<{
        status: boolean;
        data: {
            id_vente: string;
            idProduit: string;
            idClient: number;
            nombre: string;
            prixTotal: string;
            dateVente: Date;
        }[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    frequenceEachClientMonth(date: intervalleDate): Promise<any>;
}
export {};

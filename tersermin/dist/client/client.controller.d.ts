import { ClientService } from './client.service';
import { DateValidation, FindClientInIntervalleValidation, FrequenceClientValidation } from './dto/client-type.dto';
import { ClientTypeValidation } from 'src/vente/dto/vente-type.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    frequenceClientManyMonth(req: FrequenceClientValidation): Promise<number[]>;
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
    historiqueClientSpecifique(client: ClientTypeValidation): Promise<{
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
    historiqueClientInIntervalle(body: FindClientInIntervalleValidation): Promise<{
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
    frequenceEachClientMonth(date: DateValidation): Promise<any>;
}

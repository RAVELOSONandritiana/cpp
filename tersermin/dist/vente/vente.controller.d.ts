import { VenteService } from './vente.service';
import { ClientTypeValidation, nMonth, RangeValidation, VenteTypeValidation } from './dto/vente-type.dto';
export declare class VenteController {
    private readonly venteService;
    constructor(venteService: VenteService);
    ActionVente(vente: VenteTypeValidation): Promise<{
        status: boolean;
        vente: {
            id_vente: string;
            idProduit: string;
            idClient: number;
            nombre: string;
            prixTotal: string;
            dateVente: Date;
        };
        stock: {
            updatedAt: Date;
            nomProduit: string;
            prixProduit: string;
            quantite: string;
            quantiteMin: string;
            id_produit: string;
            dateAjout: Date;
        };
    } | {
        status: false;
        infoProduct: {
            updatedAt: Date;
            nomProduit: string;
            prixProduit: string;
            quantite: string;
            quantiteMin: string;
            id_produit: string;
            dateAjout: Date;
        };
        message: string;
        reste?: undefined;
        manquant?: undefined;
    } | {
        status: boolean;
        message: string;
        reste: string;
        manquant: string;
        infoProduct?: undefined;
    }>;
    getPrixTotal(body: any): Promise<number[]>;
    historiqueClient(client: ClientTypeValidation): Promise<{
        status: boolean;
        data: ({
            vente: {
                id_vente: string;
                idProduit: string;
                idClient: number;
                nombre: string;
                prixTotal: string;
                dateVente: Date;
            }[];
        } & {
            id_client: number;
            nomClient: string;
            contact: string | null;
            createdAt: Date;
            updatedAt: Date;
        })[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    clearHistoriqueClient(client: ClientTypeValidation): Promise<{
        status: true;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        message?: undefined;
    }>;
    getClientNMonth(body: nMonth): Promise<number[]>;
    getProductNMonth(body: nMonth): Promise<number[]>;
    getHistoriqueVenteN(n: number): Promise<{
        id_vente: string;
        idProduit: string;
        idClient: number;
        nombre: string;
        prixTotal: string;
        dateVente: Date;
    }[]>;
    historiqueVenteInRange(body: RangeValidation): Promise<{
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
    clearHistoriqueVenteInRange(body: RangeValidation): Promise<{
        status: boolean;
        nombre: number;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        nombre?: undefined;
    }>;
}

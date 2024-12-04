import { ClientType, VenteType } from './types/vente.type';
import { nMonth, RangeValidation } from './dto/vente-type.dto';
export declare class VenteService {
    private readonly prisma;
    private readonly stockService;
    private readonly momentService;
    constructor();
    protected verifQuantity(vente: VenteType): Promise<{
        status: boolean;
        message: string;
        reste?: undefined;
        manquant?: undefined;
        infoProduct?: undefined;
    } | {
        status: boolean;
        message: string;
        reste: string;
        manquant: string;
        infoProduct?: undefined;
    } | {
        status: boolean;
        infoProduct: {
            updatedAt: Date;
            nomProduit: string;
            prixProduit: string;
            quantite: string;
            quantiteMin: string;
            id_produit: string;
            dateAjout: Date;
        };
        message?: undefined;
        reste?: undefined;
        manquant?: undefined;
    }>;
    ActionVente(vente: VenteType): Promise<{
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
    protected prixTotalDay(date: string): Promise<string[]>;
    getPrixTotal(body: any): Promise<number[]>;
    getHistoriqueClient(client: ClientType): Promise<{
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
    protected verifyIdentity(client: ClientType): Promise<{
        status: boolean;
        message: string;
    }>;
    clearHistoriqueClient(client: ClientType): Promise<{
        status: true;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        message?: undefined;
    }>;
    protected getProductOneDay(date: string): Promise<number>;
    getProductNMonth(body: nMonth): Promise<number[]>;
    protected getClientOneDay(date: string): Promise<number>;
    getClientNmonth(body: nMonth): Promise<number[]>;
    getHistoriqueVente(): Promise<{
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
    protected deleteHistoriqueVenteWithId(id: string): Promise<{
        status: boolean;
        data: {
            id_vente: string;
            idProduit: string;
            idClient: number;
            nombre: string;
            prixTotal: string;
            dateVente: Date;
        };
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

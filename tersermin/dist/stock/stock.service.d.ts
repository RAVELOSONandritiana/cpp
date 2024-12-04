import { alterProductValidation, MonthValidation, ProduitValidation, RangeValidation } from './dto/stock-type.dto';
export declare class StockService {
    private readonly prisma;
    private readonly momentService;
    constructor();
    addProduct(produit: ProduitValidation): Promise<{
        status: boolean;
        data: {
            updatedAt: Date;
            nomProduit: string;
            prixProduit: string;
            quantite: string;
            quantiteMin: string;
            id_produit: string;
            dateAjout: Date;
        };
        message?: undefined;
    } | {
        status: boolean;
        message: string;
        data?: undefined;
    }>;
    getInfoProduct(filter: string): Promise<string[] | {
        id_produit: string;
        prixProduit: string;
        nomProduit: string;
        quantite: string;
        quantiteMin: string;
    }[]>;
    productExists(nomProduit: string): Promise<boolean>;
    getAllInfoProduct(nomProduit: string): Promise<{
        status: boolean;
        data: {
            updatedAt: Date;
            nomProduit: string;
            prixProduit: string;
            quantite: string;
            quantiteMin: string;
            id_produit: string;
            dateAjout: Date;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    alterProduct(body: alterProductValidation): Promise<{
        status: boolean;
        data: {
            updatedAt: Date;
            nomProduit: string;
            prixProduit: string;
            quantite: string;
            quantiteMin: string;
            id_produit: string;
            dateAjout: Date;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    quantiteMinAvailable(): Promise<{
        updatedAt: Date;
        nomProduit: string;
        prixProduit: string;
        quantite: string;
        quantiteMin: string;
        id_produit: string;
        dateAjout: Date;
    }[]>;
    bestProductInRange(body: RangeValidation): Promise<{
        status: boolean;
        data: any[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    getNamePoductUsingId({ id }: {
        id: string;
    }): Promise<{
        status: boolean;
        data: {
            nomProduit: string;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    bestProductInManyMonths(body: MonthValidation): Promise<{
        status: boolean;
        data: any[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
}

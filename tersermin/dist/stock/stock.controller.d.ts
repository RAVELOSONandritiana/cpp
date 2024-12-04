import { StockService } from './stock.service';
import { Request } from 'express';
import { alterProductValidation, MonthValidation, ProduitValidation, RangeValidation } from './dto/stock-type.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
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
    getInfoProduct(req: Request): Promise<string[] | {
        id_produit: string;
        prixProduit: string;
        nomProduit: string;
        quantite: string;
        quantiteMin: string;
    }[]>;
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

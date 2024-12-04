import { SortantService } from './sortant.service';
import { AchatSortantDto } from './dto/sortant-types.dto';
export declare class SortantController {
    private readonly sortantService;
    constructor(sortantService: SortantService);
    acheterProduitFournisseur(body: AchatSortantDto): Promise<{
        status: boolean;
        data: {
            status: boolean;
            data: {
                idProduit: string;
                nombre: string;
                prixTotal: string;
                prix_unitaire: string;
                id_sortant: string;
                DateAchat: Date;
            };
            error?: undefined;
        } | {
            status: boolean;
            error: any;
            data?: undefined;
        };
        update: {
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
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
        update?: undefined;
    }>;
    sumManyMonth(body: {
        debut: string;
        fin: string;
    }): Promise<{
        status: boolean;
        data: any[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
}

import { MomentService } from 'src/moment/moment.service';
import { AchatSortantDto } from './dto/sortant-types.dto';
import { StockService } from 'src/stock/stock.service';
export declare class SortantService {
    private readonly momentService;
    private readonly stockService;
    private readonly prisma;
    constructor(momentService: MomentService, stockService: StockService);
    private addInSortant;
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
    private sumOneMonth;
    sumManyMonth(dateDebut: string, dateFin: string): Promise<{
        status: boolean;
        data: any[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
}

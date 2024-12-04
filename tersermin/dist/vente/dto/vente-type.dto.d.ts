export declare class ClientTypeValidation {
    nomClient: string;
    contact: string;
    constructor(nomClient: string, contact: string);
}
export declare class VenteTypeValidation extends ClientTypeValidation {
    nomProduit: string;
    nombre: string;
    constructor(nomProduit: string, nomClient: string, contact: string, nombre: string);
}
export declare class nMonth {
    date: string;
    n: number;
}
export declare class RangeValidation {
    debut: string;
    fin: string;
}

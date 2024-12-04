export type VenteType = {
    nomProduit: string;
    nombre: string;
    nomClient: string;
    contact: string;
};
export type QueryVente = {
    id_vente: string;
    idProduit: string;
    nombre: string;
    prixTotal: string;
    dateVente: string;
};
export type ClientType = {
    nomClient: string;
    contact: string;
};

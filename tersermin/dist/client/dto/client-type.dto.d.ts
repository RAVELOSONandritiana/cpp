declare class ClientTypeValidation {
    nomClient: string;
    contact: string;
    constructor(nomClient: string, contact: string);
}
export declare class FindClientInIntervalleValidation extends ClientTypeValidation {
    debut: string;
    fin: string;
    constructor(nomClient: string, contact: string, debut: string, fin: string);
}
export declare class FrequenceClientValidation {
    date: string;
    client: ClientTypeValidation;
    n: number;
    constructor(client: ClientTypeValidation, date: string, n: number);
}
export declare class DateValidation {
    debut: string;
    fin: string;
    constructor(debut: string, fin: string);
}
export {};

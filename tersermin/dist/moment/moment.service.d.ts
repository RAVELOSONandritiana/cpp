import { DATEFLAGS } from 'src/client/client.service';
import * as moment from 'moment';
export declare class MomentService {
    constructor();
    Moment(date: any): moment.Moment;
    now(): string;
    formatWith(date: string, s: string): string;
    nowFormat(): string;
    moment(date: string): string;
    getMonth(): {
        index: number;
        month: string;
    };
    lenMonth(date: string): number;
    getDaysInAMonth(date: string): string[];
    getMonths(date: string, n: number): string[];
    getDaysInManyMonths(date: string, n: number): string[][];
    addDate(date: string, n: number, flags: DATEFLAGS): string;
    diffDate(debut: string, fin: string): number;
    dateStartOf(date: string, flags: DATEFLAGS): string;
    dateEndOf(date: string, flags: DATEFLAGS): string;
    diff(debut: string, fin: string, flags: DATEFLAGS): number;
    ifInRange(debut: string, fin: string): boolean;
}

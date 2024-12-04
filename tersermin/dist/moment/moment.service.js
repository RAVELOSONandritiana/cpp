"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomentService = void 0;
const main_1 = require("../main");
const moment = require("moment");
class MomentService {
    constructor() { }
    Moment(date) {
        return moment(date);
    }
    now() {
        return '' + moment().format('YYYY-MM-DD');
    }
    formatWith(date, s) {
        return '' + moment(date).format(s);
    }
    nowFormat() {
        return moment().add(main_1.ADD_TIME, 'hour').format();
    }
    moment(date) {
        return moment(date).format();
    }
    getMonth() {
        const index = +moment(this.now()).format('MM');
        const month = '' + moment(this.now()).format('MMMM');
        return {
            index: index,
            month: month,
        };
    }
    lenMonth(date) {
        const len = moment(date).daysInMonth();
        return +len;
    }
    getDaysInAMonth(date) {
        const now = moment(date).startOf('month');
        const months = [];
        for (let i = 0; i < this.lenMonth(date); i++) {
            months.push('' + now.format('YYYY-MM-DD'));
            now.add(1, 'day');
        }
        return months;
    }
    getMonths(date, n) {
        const monthNow = moment(date);
        const tabMonth = [];
        for (let i = 0; i < n; i++) {
            tabMonth.push('' + monthNow.startOf("month").format('YYYY-MM-DD'));
            monthNow.add(-1, "month");
        }
        return tabMonth.reverse();
    }
    getDaysInManyMonths(date, n) {
        const months = this.getMonths(date, n);
        const d = [];
        months.forEach((month) => {
            const a = this.getDaysInAMonth(month);
            d.push(a);
        });
        return d;
    }
    addDate(date, n, flags) {
        return moment(date).add(n, flags).startOf(flags).format('YYYY-MM-DD');
    }
    diffDate(debut, fin) {
        return moment(fin).diff(moment(debut), "month");
    }
    dateStartOf(date, flags) {
        return moment(date).startOf(flags).format();
    }
    dateEndOf(date, flags) {
        return moment(date).endOf(flags).format();
    }
    diff(debut, fin, flags) {
        return moment(fin).diff(moment(debut), flags);
    }
    ifInRange(debut, fin) {
        const neglige = {
            year: 0,
            month: 0,
            day: 0,
        };
        return moment()
            .set(neglige)
            .isBetween(moment(debut).set(neglige), moment(fin).set(neglige), null, '[]');
    }
}
exports.MomentService = MomentService;
//# sourceMappingURL=moment.service.js.map
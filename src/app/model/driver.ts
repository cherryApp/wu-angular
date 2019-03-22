export class Driver {
    id: number;
    name?: string;
    email?: string;
    city?: string;
    address?: string;
    phone?: string;

    constructor(options: any = {}) {
        for (let k in options) {
            this[k] = options[k] || '';
        }
    }
}

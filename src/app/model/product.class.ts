import { Vendor } from './vendor.class';

export class Product {
    id: number;
    vendorId: Vendor;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

    constructor(id: number = 0, vendorId: Vendor = new Vendor(), partNumber: string = "",
        name: string = "", price: number = 0, unit: string = null, photoPath: string = null) {
        this.id = id;
        this.vendorId = vendorId;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
    }

}

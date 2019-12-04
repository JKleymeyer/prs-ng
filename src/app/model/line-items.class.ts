import { Request } from './request.class';
import { Product } from './product.class';

export class LineItems {
    id: number;
    request: Request;
    product: Product;
    quantity: string = "";

    constructor(id: number = 0, request: Request = new Request, product: Product = new Product,
        quantity: string = "") {
        this.id = id;
        this.request = request;
        this.product = product;
        this.quantity = quantity;
    }
}

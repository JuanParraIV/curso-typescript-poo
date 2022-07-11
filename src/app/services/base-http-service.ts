import { ProductService } from './../models/product-service.model';
import { Category } from "../models/category.model";
import axios from 'axios';

export class BaseHttpService<TypeClass> {
    /*  data: TypeClass[]=[]; */

    constructor(
        private url: string= 'https://api.escuelajs.co/api/v1/products'
    ){}

     async getAll(){
        const { data } = await axios.get<TypeClass[]>(`${this.url}`);
        return data;
     }
}

(async ()=>{
    const url1= 'https://api.escuelajs.co/api/v1/products';
    const ProductService=new BaseHttpService<Product>
})()

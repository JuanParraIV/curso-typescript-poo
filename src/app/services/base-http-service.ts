
import { ProductService } from './../models/product-service.model';
import { Category } from "../models/category.model";
import axios from 'axios';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<TypeClass> {
    /*  data: TypeClass[]=[]; */

    constructor(
        protected url: string= 'https://api.escuelajs.co/api/v1/products'
    ){}

     async getAll(){
        const { data } = await axios.get<TypeClass[]>(`${this.url}`);
        return data;
     }

     async update<ID,DTO>(id : ID, changes : DTO){
        try {
            const { data } = await axios.put(`${this.url}/${id}`,changes);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}

(async ()=>{
    const url1= 'https://api.escuelajs.co/api/v1/products';
    const productService=new BaseHttpService<Product>(url1)
    const res = await productService.getAll();
    console.log('products',res.length);
    productService.update<Product['id'], UpdateProductDto>(1,{
        title: 'asa',
    })

    const url2= 'https://api.escuelajs.co/api/v1/categories';
    const categoryService = new BaseHttpService<Category>(url2);
    const res1 = await categoryService.getAll();
    console.log('Categories',res1.length);
})()


import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";
import axios from 'axios';

export class ProductHttpService implements ProductService{

    private url = 'https://api.escuelajs.co/api/v1/products'
   async getAll(){
       try {
         const { data } = await axios.get(this.url);
         return data
       } catch (error) {
        console.log(error);
       }
       
    }
    async update(id: Product['id'], changes: UpdateProductDto){
        try {
            const { data } = await axios.put(`${this.url}/${id}`,changes);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    async create(dto: CreateProductDto){
        try {
            const { data } = await axios.post(this.url,dto)
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    async findOne(id: Product['id']){
        try {
            const { data } = await axios.get(`${this.url}/${id}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    
}
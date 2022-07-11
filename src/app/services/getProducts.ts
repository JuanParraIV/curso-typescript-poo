import axios from 'axios';
import { Category } from '../models/category.model'
import { Product } from '../models/product.model'

export const getProducts = async (): Promise<Product[]> => {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products')
    const products = res.data
    return products
}

/* export const getProducts = async () => {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')

    return data
} */

/* export const getProducts = async ()=> {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products')
    const products = res.data as Product[];
    return products
} */
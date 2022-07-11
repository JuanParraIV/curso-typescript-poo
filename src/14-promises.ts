import axios from 'axios';

const getProducts = async ()=>{
    const res = await axios.get('https://api.escuelajs.co/api/v1/products')
    const products = res.data

    console.log(products)
    
}

getProducts();
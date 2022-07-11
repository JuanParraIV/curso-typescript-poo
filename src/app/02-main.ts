import { getProducts } from './services/getProducts';
import { ProductMemoryService} from './services/product-memory.services'

const productService = new ProductMemoryService();
productService.create({
    title: 'Product 1',
    price: 100,
    description: 'Product description',
    categoryId:12,
    images:[]
})

const allProducts = productService.getAll();

const productId= allProducts[0].id;

productService.update(productId, {
    title: 'Product 1 CAMBIADO',

});

const res = productService.findOne(productId);
console.log(res)
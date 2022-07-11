import { ProductHttpService} from './services/product-http.services'


(async ()=> {

    const productService = new ProductHttpService();
    
    console.log('--'.repeat(10));
    console.log('getAll')
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((product:any)=>product.price));

    const productId = products[0].id;
    console.log('--'.repeat(10));
    console.log('update')
    await productService.update(productId, {
        price:10000,
        title:'Nuevo Producto',
        description:'Nueva Descriptions'
    });

    console.log('--'.repeat(10));
    console.log('findOne by Id')
    const product = await productService.findOne(productId);
    console.log(product);
})()
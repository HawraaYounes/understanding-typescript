import _ from 'lodash';
console.log(_.shuffle([1, 2, 3]));
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];
const loadedProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
import { validate } from 'class-validator';
const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
//# sourceMappingURL=app.js.map
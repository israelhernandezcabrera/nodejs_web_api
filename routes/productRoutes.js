const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema');
const tokenValdation = require('../middleware/tokenValidation');

router.post(
    '/', 
    tokenValdation.validateToken,
    joiSchemaValidation.validateBody(productSchema.createProductSchema), 
    productController.createProduct
);

router.get(
    '/:id',
    tokenValdation.validateToken,
    productController.getProductById
)

router.put(
    '/:id',
    tokenValdation.validateToken,
    joiSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct
    )

router.get(
    '/',
    tokenValdation.validateToken,
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductsSchema),
    productController.getAllProducts
)

router.delete(
    '/:id',
    tokenValdation.validateToken,
    productController.deleteProduct
)

module.exports = router;
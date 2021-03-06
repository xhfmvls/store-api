const express = require('express')
const { getAllProducts, getProduct, createProduct, updatePorduct, deleteProduct } = require('../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)

router.get('/:ID', getProduct)

router.post('/', createProduct)

router.patch('/', updatePorduct)

router.delete('/', deleteProduct)

module.exports = router
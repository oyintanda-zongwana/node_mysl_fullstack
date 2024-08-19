import express from 'express'
import {getFruits, getFruit, insertFruit, deleteFruit, updateFruit, addToCart} from '../controller/fruitsController.js'
import { verifyAToken } from '../middleware/authenticate.js'

const fruitRouter = express.Router()

fruitRouter.get('/', verifyAToken, getFruits)

fruitRouter.post('/insert', insertFruit)
fruitRouter.post('/cart', verifyAToken, addToCart)


fruitRouter
        .route('/:id')
            .get(getFruit)
            .delete(deleteFruit)
            .patch(updateFruit)


export default fruitRouter
import {getFruitsDB, getFruitDB, insertFruitDB, deleteFruitDB, updateFruitDB, addToCartDB} from '../model/fruitDB.js'
import { getUserDB } from '../model/userDB.js';

let getFruits = async(req, res) => {
    res.json(await getFruitsDB());
}

let getFruit = async(req, res) => {
    res.json(await getFruitDB(req.params.id));
}

let insertFruit = async (req, res) => {
    let {name, weight, amount} = req.body
    await insertFruitDB(name, weight, amount)
    res.send('data was inserted into successfully')
}   

let deleteFruit = async(req, res) => {
    let {id} = req.body
    await deleteFruitDB(req.params.id)
    res.send('data was deleted into successfully')
}

let updateFruit = async(req, res) => {
    let {name, weight, amount} = req.body
    
    let peer = await getFruitDB(req.params.id)
    name ? name = name: name =  peer.fruit_name 
    surname ? surname = surname: surname =  peer.weight 
    age ? age = age: age =  peer.amount

    await updateFruitDB(req.params.id, name, weight, amount)
    res.send('data has been updated successfully')
}

let addToCart = async (req, res) => {
    console.log(req.body);
    let {id} = await getUserDB(req.body.user)
    // await addToCartDB(req.body.id, id)
    res.json({message: 'You have added an item to your cart'})
}

export {getFruits, getFruit, insertFruit, deleteFruit, updateFruit, addToCart}
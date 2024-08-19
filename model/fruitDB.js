import {pool} from '../config/config.js'
import {config} from 'dotenv'
config()

const getFruitsDB = async () => {
    let [data] = await pool.query('SELECT * FROM fruits');
    return data 
}

const getFruitDB = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM fruits WHERE id = ?', [id])
    return data

}

const insertFruitDB = async (name, weight, amount) => {
    let [data] = await pool.query(`
        INSERT INTO fruits (fruit_name, weight, amount)
        VALUES (?, ?, ?)
        `, [name, weight, amount])
        return data
}

const deleteFruitDB = async (id) => {
    await pool.query("DELETE FROM fruits WHERE id = ?", [id])
}

const updateFruitDB = async (id, name, weight, amount) => {
    await pool.query("UPDATE fruits SET fruit_name = ?, weight = ?, amount = ? WHERE id = ?", [name, weight, amount, id])
}

const addToCartDB = async (user_id, fruit_id) => {
    await pool.query(`
        INSERT INTO fruits (user_id, fruit_id)
        VALUES (?, ?)
        `, [user_id, fruit_id])
}

export {getFruitsDB, getFruitDB, insertFruitDB, deleteFruitDB, updateFruitDB, addToCartDB}
import {pool} from '../config/config.js'
import {config} from 'dotenv'
config()

const getUsersDB = async () => {
    let [data] = await pool.query('SELECT * FROM users');
    return data 
}

const getUserDB = async (username) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    return data

}

const insertUserDB = async (name, surname, age, code, car, eye, username, password) => {
    let [data] = await pool.query(`
        INSERT INTO users (name, surname, age, fav_coding_lang, fav_car, eye_color, username, password)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [name, surname, age, code, car, eye, username, password])
        return data
}

const deleteUserDB = async (id) => {
    await pool.query("DELETE FROM users WHERE id = ?", [id])
}

const updateUserDB = async (id, name, surname, age, code, car, eye) => {
    await pool.query("UPDATE users SET name = ?, surname = ?, age = ?,  fav_coding_lang = ?, fav_car = ?, eye_color = ? WHERE id = ?", [name, surname, age, code, car, eye, id])
}

export {getUsersDB, getUserDB, insertUserDB, deleteUserDB, updateUserDB}
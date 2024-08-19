import {compare} from 'bcrypt'
import { getUserDB } from '../model/userDB.js';
import jwk from 'jsonwebtoken';
import { config } from 'dotenv';
{config}

const checkUser = async(req, res, next) => {
    const {username, password} = req.body; 
    let hashedPassword = (await getUserDB(username)).password
    let result =  await compare(password,hashedPassword)
        if(result == true) {
            let token = jwk.sign({username:username}, process.env.SECRET_KEY ,{expiresIn:'1h'});
            console.log(token);
            req.body.token = token;
            next();
        } else {
            res.send("password is incorrect");
        }
} 

const verifyAToken = (req, res, next) => {
    let {cookie} = req.headers;
    // checks if the token exists first
    let token = cookie && cookie.split("=")[1];
    jwk.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.json({message: 'token has expired'});
            return;
        }
        req.body.user = decoded.username
        console.log(req.body.username);
    })
    console.log(token);
    next();
}

export {checkUser, verifyAToken}
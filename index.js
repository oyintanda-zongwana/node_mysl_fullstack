import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRouter.js'
import fruitRouter from './routes/fruitRouter.js'

let port = process.env.PORT || 5500
const app = express()

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))
app.use(express.json())

app.use('/user', userRouter)
app.use('/fruit', fruitRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log(`Server is running on port ${port}`)
})
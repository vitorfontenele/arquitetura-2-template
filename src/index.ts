import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter'
import { accountRouter } from './router/accountRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRouter);
app.use("/accounts", accountRouter);

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})


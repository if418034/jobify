import 'express-async-errors'
import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import jobRouter from './routes/jobRouter.js'

import {validateTest} from './middleware/validationMiddleware.js'

dotenv.config()
const app = express()

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/v1/test', validateTest, (req, res) => {
    const { name } = req.body;
    res.json({ message: `hello ${name}`})
    }
)

app.post('/', (req, res) => {
    console.log(req);
    res.json({message: 'data received', data: req.body})
})

app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => {
    res.status(404).json({msg: 'End-point not found'})
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server is running on PORT ${port}...`)
    })
} catch (error) {
    console.log(error)
    process.exit(1)
}
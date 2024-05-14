import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import {nanoid} from 'nanoid'

dotenv.config()
const app = express()

let jobs = [
    {id: nanoid(), company:'PT. Global Digital Niaga', position:'Back End Developer'},
    {id: nanoid(), company:'PT. Bank Sinarmas', position:'Front End Developer'}
]

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json());

const port = process.env.PORT || 5100

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    console.log(req);
    res.json({message: 'data received', data: req.body})
})

//GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({jobs})
})

//GET SINGLE JOB
app.get('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params
    const data = jobs.find((job) => job.id === id);
    if (!data) {
        res.status(404).json({msg: `No job with id ${id}`})
    }
    res.status(200).json({data})
})

//CREATE JOB
app.post('/api/v1/jobs', (req, res) => {
    const {company, position} = req.body
    if(!company || !position) {
        res.status(400).json({msg: 'Please provide company and position'})
        return
    }
    const id = nanoid(10)
    const job = {id, company, position}
    try {
        jobs.push(job)
    } catch (error) {
        console.log(error)
    }
    res.status(201).json({job})
})

//EDIT JOB
app.patch('/api/v1/jobs/:id', (req, res) => {

    const {company, position} = req.body
    if(!company || !position) {
        res.status(400).json({msg: 'Please provide company and position'})
        return
    }
    const {id} = req.params
    const data = jobs.find((job) => job.id === id)
    if(!data) {
        res.status(404).json({msg: `No job found with id ${id}`})
    }
    data.company = company
    data.position = position
    res.status(200).json({msg: 'Job modified', data})
})

//DELETE JOB
app.delete('/api/v1/jobs/:id', (req, res) => {
    const {id} = req.params
    const data = jobs.find((job) => job.id === id)
    if(!data) {
        res.status(404).json({msg: `No job found with id ${id}`})
    }
    jobs = jobs.filter((job) => job.id !== id)
    res.status(200).json({msg: `Job with id ${id} is deleted`})
})

app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
})
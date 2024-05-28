import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError, BadRequestError } from '../errors/customError.js'

export const getAllJobs = async (req, res) => {
    const data = await Job.find({});
    if (!data) throw new NotFoundError(`No job found with id ${id}`)
    res.status(StatusCodes.OK).json({data})
}

export const getJob = async (req, res) => {
    const { id } = req.params
    const data = await Job.findById(id);
    if (!data) throw new NotFoundError(`No job found with id ${id}`)
    res.status(StatusCodes.OK).json({data})
}

export const createJob = async (req, res) => {
    const {company, position} = req.body
    const job = await Job.create({company, position});
    res.status(StatusCodes.CREATED).json({job})
}

export const updateJob = async (req, res) => {

    const {company, position} = req.body
    if(!company || !position) throw new BadRequestError('Please provide all the parameters needed')
    const {id} = req.params
    const updateJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true
    })

    if(!updateJob) throw new NotFoundError(`No job found with id ${id}`, 404);

    res.status(StatusCodes.OK).json({msg: 'Job modified', updateJob})
}

export const deleteJob = async (req, res) => {
    const {id} = req.params
    const deleteJob = await Job.findByIdAndDelete(id)
    if(!deleteJob) {
        res.status(404).json({msg: `No job found with id ${id}`})
    }
    res.status(StatusCodes.OK).json({msg: `Job with id ${id} is deleted`})
}


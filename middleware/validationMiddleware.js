import { body, param, validationResult } from 'express-validator'
import { BadRequestError } from '../errors/customError.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js'
import mongoose from 'mongoose'

const withValidationErrors = (validateValues) => {
    return [validateValues,
        (req, res, next) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg)
                throw new BadRequestError(errorMessages)
            }
            next()
        }
    ]
}

export const validateTest = withValidationErrors([
    body('name')
        .notEmpty()
        .withMessage('name is required')
        .isLength({min: 3, max: 50})
        .withMessage('name must be between 3 and 50 characters long.')
        .trim()
])

export const validateJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('company is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('job location is required'),
    body('jobStatus')
        .isIn(Object.values(JOB_STATUS))
        .withMessage('invalid job status value'),
    body('jobType')
        .isIn(Object.values(JOB_TYPE))
        .withMessage('invalid job type value')
])

export const validateId = withValidationErrors([
    param('id')
        .custom((value) => {
            
        }
        .withMessage('invalid MongoDB id')


const data = await Job.findById(id);
if (!data) throw new NotFoundError(`No job found with id ${id}`)
])
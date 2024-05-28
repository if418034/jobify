import {Router} from 'express'
import { validateJobInput, validateId } from '../middleware/validationMiddleware.js'
const router = Router()

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} from '../controllers/jobController.js'

router.route('/')
    .get(getAllJobs)
    .post(validateJobInput, createJob)

router.route('/:id')
    .get(validateId, getJob)
    .patch(validateId, validateJobInput, updateJob)
    .delete(validateId, deleteJob)

export default router;
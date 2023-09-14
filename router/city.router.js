import express from 'express';
import citiesController from '../controllers/cities.controller.js';
import { logPostMiddleware } from '../middlewares/example.middleware.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

const {getCities, createCity, getCityById, updateCity, deleteCity} = citiesController;

router.get('/', getCities);
router.post('/', passport.authenticate('jwt', { session: false }), logPostMiddleware, createCity);
router.get('/:id', getCityById);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity)

export default router;
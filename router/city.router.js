import express from 'express';
import citiesController from '../controllers/cities.controller.js';

const router = express.Router();

const {getCities, createCity, getCityById, updateCity} = citiesController;

router.get('/', getCities);
router.post('/', createCity);
router.get('/:id', getCityById);
router.put('/:id', updateCity);

export default router;
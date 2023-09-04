import express from 'express';
import itinerariesController from '../controllers/itineraries.controller.js';

const router = express.Router();

const {getItineraries, createItinerary, getItineraryById, updateItinerary} = itinerariesController;

router.get('/', getItineraries);
router.post('/', createItinerary);
router.get('/:id', getItineraryById);
router.put('/:id', updateItinerary);

export default router;
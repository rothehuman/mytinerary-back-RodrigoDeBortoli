import express from 'express';
import cityRouter from './city.router.js';
import itineraryRouter from './itinerary.router.js'

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello worlddd')
});

router.use('/cities', cityRouter);
router.use('/itineraries', itineraryRouter);

export default router;
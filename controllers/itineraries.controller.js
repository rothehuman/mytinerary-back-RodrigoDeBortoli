import Itinerary from "../models/Itinerary.js"

const controller = {
    getItineraries: async (req, res)=>{
        let queries = {}

        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }
        try {
            const itineraries = await Itinerary.find(queries).populate('city')

            if (itineraries.length > 0) {
                return res.status(200).json({
                    success: true,
                    itineraries: itineraries
                })
            }
            return res.status(404).json({
                success: false,
                message: 'itineraries not fount'
            })
            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error getting itineraries'
            })
        }
    },
    getItineraryById: async (req, res)=>{
        try {
            const itinerary = await Itinerary.findById(req.params.id)

            if (itinerary) {
                return res.status(200).json({
                    success: true,
                    itineraries: itinerary
                })
            }

            return res.status(404).json({
                success: false,
                message: 'null'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    createItinerary: async (req, res)=>{
        try {
            const newItinerary = await Itinerary.create(req.body);
            
            return res.status(201).json({
                success: true,
                message: 'Itinerary created'
            })            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    updateItinerary: async (req, res)=>{
        try {
            await Itinerary.updateOne({_id: req.params.id}, req.body)

            return req.status(200).json({
                success: true,
                message: 'updated'
            })           
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    deleteItinerary: async (req, res)=>{
        try {
            await Itinerary.deleteOne({_id: req.params.id})

            return res.status(200).json({
                success: true,
                message: 'deleted'
            })            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    }
}

export default controller
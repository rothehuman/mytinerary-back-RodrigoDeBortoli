import City from "../models/City.js"

const controller = {
    getCities: async (req, res)=>{
        let queries = {}

        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }

        if(req.query.country){
            queries.country = req.query.country
        }
        try {
            const cities = await City.find(queries)

            if (cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: cities
                })
            }
            return res.status(404).json({
                success: false,
                message: 'cities not fount'
            })
            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error getting cities'
            })
        }
    },
    getCityById: async (req, res)=>{
        try {
            const city = await City.findById(req.params.id)

            if (city) {
                return res.status(200).json({
                    success: true,
                    cities: city
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
    createCity: async (req, res)=>{
        try {
            const newCity = await City.create(req.body);
            
            return res.status(201).json({
                success: true,
                message: 'City created'
            })            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error'
            })
        }
    },
    updateCity: async (req, res)=>{
        try {
            await City.updateOne({_id: req.params.id}, req.body)

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
    deleteCity: async (req, res)=>{
        try {
            await City.deleteOne({_id: req.params.id})

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
//import User from '../models/User,js'


export const isAdmin = async (req, res, next) => {
    try {
        const user = await UserActivation.findById(req.query.userId)
        if (user.role == 'admin') {
            return next()
        }
        return res.status(401).json({
            success: false,
            message: 'Not allowed'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'internal serber error, isAdmin middleware'
        })
    }
    

}
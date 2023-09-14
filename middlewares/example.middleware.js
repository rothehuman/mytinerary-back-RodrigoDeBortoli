export const logPostMiddleware = (req, res, next) => {
    console.log('se ejecutó petición POST');
    next()
}
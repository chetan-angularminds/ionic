// const asyncHandler = (requestHandler) => async (req, res, next, err) => {
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({ success: false, message: error.message });
//     }
// }

const asyncHandler = (requestHandler) => {
     (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
     }
}

export {asyncHandler}
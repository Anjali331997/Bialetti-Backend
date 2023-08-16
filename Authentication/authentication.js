var jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        jwt.verify(token, 'Anjali-bialetti', function (err, decoded) {
            if (err) {
                res.status(200).json({ msg: "token not valid" })
            } else {
                const user_id = decoded.user_id
                req.user_id = user_id
                next()
            }
        })
    } else {
        res.send({message:"Invalid credentials"})
    }
}
module.exports = { authentication}
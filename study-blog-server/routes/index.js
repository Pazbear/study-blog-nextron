const express = require("express");
const router = express.Router();

const userRoutes = require('../features/user/routes')

router.get('/get-session', (req, res) => {
    if (req.user && req.isAuthenticated()) {
        if (req.user.is_admin) {
            return res.status(401).send({ success: false })
        }
        return res.send({ success: true, userInfo: req.user });
    }
    return res.send({ success: false });
})

router.use('/user', userRoutes);

module.exports = router;
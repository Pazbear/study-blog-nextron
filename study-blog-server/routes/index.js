const express = require("express");
const router = express.Router();

const userRoutes = require('../features/user/routes')
const workRoutes = require('../features/work/routes')

router.get('/get-session', (req, res) => {
    if (req.user && req.isAuthenticated()) {
        if (req.user.is_admin) {
            return res.status(401).send({ success: false })
        }
        return res.status(200).send({ success: true, user: req.user });
    }
    return res.status(401).send({ success: false });
})

router.use('/user', userRoutes);
router.use('/work', workRoutes);

module.exports = router;
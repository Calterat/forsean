const router = require('express').Router();
const userRoutes = require('./user-routes');
const noteRoutes = require('./note-routes');

router.use('/user', userRoutes);
router.use('/note', noteRoutes);

module.exports = router;
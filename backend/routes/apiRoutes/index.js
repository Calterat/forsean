const router = require('express').Router();
const noteRoutes = require('./note-routes');

router.use('/note', noteRoutes);

module.exports = router;
const router = require('express').Router();
const noteRoutes = require('./note-routes');

// for our note routes
router.use('/note', noteRoutes);

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// pushes further to apiRoutes
router.use('/api', apiRoutes);

// If requested route isn't available
router.use((_req, res) => {
  res.send("<h1>ROUTE BLOCKED BY RUBBLE</h1>");
});

module.exports = router;
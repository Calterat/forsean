const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

router.use((_req, res) => {
  res.send("<h1>ROUTE BLOCKED BY RUBBLE</h1>");
});

module.exports = router;
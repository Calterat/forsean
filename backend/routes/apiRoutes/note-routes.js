const router = require('express').Router();
const { User, Note } = require('../../models');

router.get('/', (_req, res) => {
  Note.findAll({
    // include: [
    //   {
    //     model: User,
    //     attributes: ['id', 'first_name', 'last_name']
    //   }
    // ]
  })
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
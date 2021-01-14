const router = require('express').Router();
const { User, Note } = require('../../models');

router.get('/', (_req, res) => {
  User.findAll({
    include: [
      {
        model: Note,
        attributes: ['id', 'title', 'body']
      }
    ]
  })
    .then(dbData = res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
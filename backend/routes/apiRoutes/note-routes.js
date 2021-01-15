const router = require('express').Router();
const {  Note } = require('../../models');

router.get('/', (_req, res) => {
  Note.findAll()
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  Note.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.body.user_id
  })
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
  console.log(req.body);
  Note.update(req.body, {
    where: { id: req.params.id }
  })
    .then(dbData => {
      if (!dbData[0]) {
        res.status(404).json({ message: 'No note found with this id' });
        return;
      }
      console.log('Updated');
      res.json(dbData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Note.destroy({
    where: { id: req.params.id }
  })
    .then(dbData => {
      console.log(dbData);
      if (!dbData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      console.log('Deleted');
      res.json(dbData);
    })
});

module.exports = router;
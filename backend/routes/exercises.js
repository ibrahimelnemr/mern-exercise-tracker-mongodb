const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
  // Validate request body
  if (!req.body.username || !req.body.description || !req.body.duration) {
    return res.status(400).json({ error: 'Username, description, and duration are required' });
  }
  if (isNaN(req.body.duration) || req.body.duration <= 0) {
    return res.status(400).json({ error: 'Duration must be a positive number' });
  }
    date,
  // Validate request body
  if (!req.body.username || !req.body.description || !req.body.duration) {
    return res.status(400).json({ error: 'Username, description, and duration are required' });
  }
  if (isNaN(req.body.duration) || req.body.duration <= 0) {
    return res.status(400).json({ error: 'Duration must be a positive number' });
  //Further validation can be added here for other fields like date etc.
  }
  const date = new Date(req.body.date);
  if (isNaN(date)) {
    return res.status(400).json({ error: 'Invalid date format. Please use YYYY-MM-DD.' });
  }
  if (isNaN(duration)) {
    return res.status(400).json({ error: 'Duration must be a number.' });
  //Further validation can be added here for other fields like date
  }
  if (!description || !duration || !date) { 
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    new Date(date);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid date format' });
  }
  if (isNaN(duration)) {
    return res.status(400).json({ error: 'Duration must be a number' });
  }
  if (!description || !duration || !date) { 
    return res.status(400).json({ error: 'Description, duration, and date are required' });
  }
  try {
    new Date(date);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid date format' });
  }
  if (isNaN(duration)) {
    return res.status(400).json({ error: 'Duration must be a number' });
  }
  if (!description || !duration || !date) { 
    return res.status(400).json({ error: 'Description, duration, and date are required' });
  }
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
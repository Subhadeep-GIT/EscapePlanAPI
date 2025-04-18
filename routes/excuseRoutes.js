const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Here’s your excuse!' });
});

router.get('/random', (req, res) => {
  const excuses = [
    "My dog ate my homework.",
    "Aliens abducted me.",
    "I got stuck in traffic... in my room.",
  ];
  const excuse = excuses[Math.floor(Math.random() * excuses.length)];
  res.json({ excuse });
});

module.exports = router;
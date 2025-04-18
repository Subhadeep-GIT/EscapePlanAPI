const express = require('express');
const router = express.Router();

// 👉 All excuses categorized
const excuses = {
  work: [
    "My Zoom crashed.",
    "I had a power cut during the meeting.",
  ],
  school: [
    "My dog ate my homework.",
    "I accidentally submitted a blank PDF.",
  ],
  family: [
    "I had to attend a surprise puja at home.",
    "Grandma needed help with her phone again.",
  ],
};

// ✅ Route for /excuses/random
router.get('/random', (req, res) => {
  // Flatten all categories into a single array
  const allExcuses = Object.values(excuses).flat();
  const excuse = allExcuses[Math.floor(Math.random() * allExcuses.length)];
  res.json({ excuse });
});

// ✅ Route for /excuses/:category
router.get('/:category', (req, res) => {
  const { category } = req.params;
  const categoryExcuses = excuses[category];

  if (!categoryExcuses) {
    return res.status(404).json({ error: 'Category not found' });
  }

  const excuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)];
  res.json({ category, excuse });
});

module.exports = router;
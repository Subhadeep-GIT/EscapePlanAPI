const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Here’s your excuse!' });
});
router.get('/:category', (req, res) => {
    const { category } = req.params;
  
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
  
    const categoryExcuses = excuses[category];
  
    if (!categoryExcuses) {
      return res.status(404).json({ error: 'Category not found' });
    }
  
    const excuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)];
    res.json({ category, excuse });
  });

module.exports = router;
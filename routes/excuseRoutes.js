const express = require('express');
const router = express.Router();

// 👉 All excuses categorized
const excuses = {
  romantic: [
    "I was lost in your thoughts and forgot the time 😌",
    "Planning a surprise took longer than expected! 💝",
    "I was writing a poem for you... and got emotional 🥹",
    "Every time I try to call, I get butterflies 🦋",
    "I was looking at our old pictures and just melted 🥰",
    "I was trying to find the perfect words to say ‘I love you’ 💬",
    "I zoned out dreaming about our future together 💭",
  ],
  apology: [
    "I messed up, but I miss you like crazy 😔💔",
    "I’m bad with words, but I swear my heart’s in the right place ❤️",
    "If I could rewind time, I’d spend every second making you smile 🕰️",
    "I didn’t mean to hurt you. You mean everything to me 🌹",
    "I'm sorry... Can I make it up to you with cuddles? 🧸",
    "Please don’t be mad — you’re the only person I want to talk to 😞",
    "No excuse is good enough… just let me fix it 🙏",
  ],
  silly-cute: [
    "I was kidnapped by my pillow... it wouldn't let me go! 🛏️",
    "The stars told me to text you but I fell asleep counting them ✨",
    "My cat walked on my phone and sent weird emojis 🐱📱",
    "I accidentally buttered my phone instead of my toast... again 🍞📵",
    "I was busy writing your name 100 times on my notebook 😅",
    "I tried to text you, but my phone got jealous of you 🫣",
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
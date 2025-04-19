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

  sillycute: [
    "I was kidnapped by my pillow... it wouldn't let me go! 🛏️",
    "The stars told me to text you but I fell asleep counting them ✨",
    "My cat walked on my phone and sent weird emojis 🐱📱",
    "I accidentally buttered my phone instead of my toast... again 🍞📵",
    "I was busy writing your name 100 times on my notebook 😅",
    "I tried to text you, but my phone got jealous of you 🫣",
  ],

  late: [
    "My alarm decided to betray me ⏰😴",
    "Traffic turned into a parking lot 🚗💥",
    "Had a wardrobe malfunction—twice 👕🧦",
    "I tripped over my own feet... again 🫠",
    "The auto-rickshaw took the scenic route 🛺🌆",
    "Blame it on the chai stall… it was worth it ☕",
  ],

  work: [
    "My laptop started updating at the worst time 💻🔄",
    "Meetings just wouldn’t end... and I couldn’t escape 🧑‍💼⏳",
    "The Wi-Fi ghosted me 👻📶",
    "Sent the email to the wrong person... had to fix it 📨🙃",
    "Was stuck helping a teammate debug their life (and code) 🧑‍💻",
  ],

  school: [
    "Teacher caught me daydreaming again 📚😵‍💫",
    "Got pulled into a surprise quiz from hell 😩✍️",
    "Library turned into a black hole of distraction 📖🌌",
    "Group project turned solo mission 🧍‍♂️📋",
    "Forgot my ID, again... had to argue with the guard 🚫🎓",
  ],

  family: [
    "Mom made me help rearrange the entire kitchen 🧼🥘",
    "Dad took over the remote and my soul 📺😅",
    "Sibling drama turned into a full episode 🧒🎭",
    "Had to calm down my grandma’s tech panic 🧓📱",
    "Family group call lasted longer than a Netflix series 📞🍿",
  ],

  college: [
    "The assignment deadline and my brain had a fight 🧠💥",
    "Had to convince my professor I actually exist 😵",
    "Lab partner bailed, so now I’m both brains and brawn 🧪💪",
    "Group discussion turned into a rant session 📢",
    "Power nap turned into a full Netflix season 😴📺",
    "Just realized today *wasn't* Sunday 🗓️🤯",
  ],

  onlineclass: [
    "Camera not working, but spirit is present 📸❌",
    "Wi-Fi said: Not today, buddy 🚫📶",
    "Mic issues… totally not eating Maggi 🍜🎤",
    "Frozen screen. Totally not playing Valorant 🎮🧊",
    "Had to pretend I wasn’t home when sir took attendance 🫣",
    "Background chaos level: 100 (Thanks, family!) 🏠📢",
  ],

  attendance: [
    "Was physically present, but mentally on vacation 🌴🧍‍♂️",
    "Google Calendar betrayed me again 🗓️💀",
    "Thought the class was tomorrow. Again. 📅🙃",
    "Had to run errands for the mess guy 🍛🛍️",
    "The only thing I passed today was the opportunity to attend 📚🚫",
    "Came to class… but it was empty. Turns out, holiday 😶",
  ],

  health: [
    "Caught a cold from my own bad jokes 🤒😂",
    "Doctor said I need more ‘me’ time... so here I am! 🩺💆‍♂️",
    "My bed and I are in a committed relationship 🛏️❤️",
    "Had to fight off a sneeze attack in class 🤧",
    "Doctor said I need to stop using my phone so much... oops! 📱😅",
  ],
  
  travel: [
    "Missed my flight because I was too busy daydreaming ✈️💭",
    "Got lost in the airport... again! 🗺️😅",
    "The train was late, but my excitement was on time 🚆✨",
    "Had to help a tourist find their way... took longer than expected 🗺️",
    "Got distracted by the duty-free shop... whoops! 🛍️✈️",
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
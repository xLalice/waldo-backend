const express = require('express');
const router = express.Router();
const Score = require('../models/score');

router.post('/', async (req, res) => {
    const { name, time, image } = req.body;
    const score = new Score({ name, time, image });
  
    try {
      const savedScore = await score.save();
      res.status(201).json(savedScore);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

router.get("/:image", async (req, res) => {
    const { image } = req.params;
    try {
        const scores = await Score.find({ image })
            .sort({ time: 1 })
            .limit(10);
        
        res.json(scores);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;


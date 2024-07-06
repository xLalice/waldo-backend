const express = require('express');
const router = express.Router();
const Character = require('../models/character');

router.post('/validate', async (req, res) => {
    const { characterName, image, x, y } = req.body;
    console.log('Received validation request:', req.body);
    try {
        const character = await Character.findOne({ name: characterName, image: image });
        console.log("character", character)
        if (!character) {
            console.log('Character not found');
            return res.status(404).json({ message: 'Character not found' });
        }

        const tolerance = 50;
        const isCorrect = Math.abs(character.x - x) <= tolerance && Math.abs(character.y - y) <= tolerance;
        console.log(isCorrect)
        res.json({ isCorrect });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:image', async (req, res) => {
    try {
        const characters = await Character.find({ image: req.params.image });
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



module.exports = router;
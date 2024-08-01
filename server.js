const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
const scoresFile = 'scores.json';

app.use(bodyParser.json());
app.use(express.static('public')); // Serves your static HTML/JS files

// Load existing scores
let scores = [];
if (fs.existsSync(scoresFile)) {
    scores = JSON.parse(fs.readFileSync(scoresFile));
}

app.post('/submit-score', (req, res) => {
    const score = req.body.score;
    if (typeof score === 'number') {
        scores.push(score);
        fs.writeFileSync(scoresFile, JSON.stringify(scores));
        res.status(200).send('Score received');
    } else {
        res.status(400).send('Invalid score');
    }
});

app.get('/average-score', (req, res) => {
    if (scores.length === 0) {
        return res.json({ average: 0 });
    }
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    res.json({ average });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

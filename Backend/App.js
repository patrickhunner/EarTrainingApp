const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());

app.use(bodyParser.json());


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'EarTrainingApp'
});

db.connect(function(err) {
    if (err) {
        throw err;
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/saveData', (req, res) => {
    const jsonData = req.body;
    const title = "Guess I'll Never Know";
    const artist = "TrackTribe";
    console.log("save data endpoint");
    console.log(jsonData);
    db.query('INSERT INTO songs (title, artist, chords) VALUES (?, ?, ?)', [title, artist, JSON.stringify(jsonData)], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved successfully');
        }
    });
});
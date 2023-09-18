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

app.get('/getSong', (req, res) => {
    const param = Object.keys(req.query)[0];
    var db_query = '';
    var query_param = '';
    switch(param) {
        case 'song_name':
            db_query = 'SELECT id, title, artist FROM songs WHERE title LIKE ?';
            query_param = `%${encodeURIComponent(req.query[param])}%`;
            break;
        case 'id':
            db_query = 'SELECT * FROM songs WHERE id = ?';
            query_param = req.query[param];
            break;
    }
    console.log("query_param: " + query_param);
    db.query(db_query, [query_param], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving song');
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    });
})

app.post('/testSaveChords', (req, res) => {
    const jsonData = req.body;
    console.log(jsonData.chords);
    console.log("FUNCTION CALLED");
    var [ordered_chords, unique_chords] = parseChordJson(jsonData.chords);
    // const title = "Guess I'll Never Know";
    // const artist = "TrackTribe";
    // console.log("save data endpoint");
    // console.log(jsonData);
    // db.query('INSERT INTO songs (title, artist, chords) VALUES (?, ?, ?)', [title, artist, JSON.stringify(jsonData)], (err, result) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send('Error saving data');
    //     } else {
    //         res.status(200).send('Data saved successfully');
    //     }
    // });
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

// HELPER FUNCTIONS

function parseChordJson(chordJson) {
    var ordered_chords = []
    var unique_chords = [];
    var edit_this = {};
    var [chord, start, end] = ['', 0, 0];
    // for each chord, get the start time
    chordJson.forEach(element => {
        [chord, start, end] = [element.chord_complex_pop, element.start, element.end];
        if (chord == 'N') {
            return;
        }
        if (!unique_chords.includes(chord)) {
            unique_chords.push(chord);
        }
        edit_this = {
            chord: chord,
            start: start,
            end: end,
            duration: Math.ceil((end - start) * 1000) / 1000
        };
        ordered_chords.push(edit_this);
    });
    console.log(ordered_chords);
    console.log(unique_chords);
    return [ordered_chords, unique_chords];
}
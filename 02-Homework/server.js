const express = require('express);
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/notes', (req,res) => {
    console.log('we have the notes');
    return res.json(notes.html);
});

app.get('*', (req,res) => {
    console.log('we have the index');
    return res.json(index.html);
});

app.get('/api', (req, res) => {
    res.json({
        term: 'api',
    });
});

app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`)
);
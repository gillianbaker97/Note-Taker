const express = require('express');
const PORT = 3001;
const app = express();

// mounts the middleware functions at the specified path
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.get routes the HTTP get requests with specific callback functions
app.get('/notes', (req,res) => {
    console.log('we have the notes');
    return res.json(notes.html);
});


app.get('*', (req,res) => {
    console.log('we have the index');
    return res.sendFile('index.html');
});

app.get('/api', (req, res) => {
    res.json({
        term: 'api',
    });
});

// used to bind and listen for the connections between a host and port 
app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`)
);
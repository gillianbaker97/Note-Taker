const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3001;
//const uuid = require('/helpers/uuid.js');


// mounts the middleware functions at the specified path
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//app.get routes the HTTP get requests with specific callback functions
app.get('/notes', (req,res) => {
    res.json(`${req.method} request received to get the notes`);
    console.info(`${req.method} request received to get the notes`);
    return res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req,res) => {
    res.json(`${req.method} request received to get the notes`);
    console.info(`${req.method} request received to get the index`);
    return res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/notes', (req, res) => {

    res.json(`${req.method} request received to retrieve the notes`);
    console.info(`${req.method} request received to retrieve the notes`);

});
  
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to retrieve the notes`);
    const { notes } = req.body;

    if (notes) {
        const newNote = {
            note,
            //note_id: uuid(),
        };

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.json(response);

    } else {
        res.json('Error in posting notes');
    };

    const reviewString = JSON.stringify(newNote);

    fs.writeFile(`./db/${newNote.note}.json`, reviewString, (err) =>
    err
      ? console.error(err)
      : console.log(
          `Review for ${newNote.note} has been written to JSON file`
        )
  );

  const response = {
    status: 'success',
    body: newNote,
  };

  console.log(response);

});

// used to bind and listen for the connections between a host and port 
app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`)
);
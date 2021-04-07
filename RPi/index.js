const {exec} = require('child_process');
const app = require('express');
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.post('/on', (req, res) => {
    exec('sudo python gpio/on.py');
    res.send(200);
});

app.post('/off', (req, res) => {
    exec('sudo python gpio/off.py');
    res.send(200);
});

app.post('brrr', (req, res) => {
    //Process electroncution

    res.send(200);
});

app.listen(3000, console.log('Server Listening in 3000'));
const {exec} = require('child_process');
const app = require('express')();
const path = require('path');

app.get('/', (req, res) => {
    res.send('cum');
});

app.post('/onFor/:millis', (req, res) => {
    exec('sudo python gpio/on.py');

    setTimeout(() => {
        console.log(`cum after ${req.params.millis}ms`);
        exec('sudo python gpio/off.py');
    }, req.params.millis);
    res.send(200);
});

app.post('/on', (req, res) => {
    exec('sudo python gpio/on.py');
    res.send(200);
});

app.post('/off', (req, res) => {
    exec('sudo python gpio/off.py');
    res.send(200);
});

app.post('/reset', (req, res) => {
    exec('sudo python gpio/reset.py');
    console.log('Pin Reset');   //Need ``?
    res.send(200);
})

app.post('brrr', (req, res) => {
    //Process electroncution

    res.send(200);
});

app.listen(3000, console.log('Server Listening in 3000'));
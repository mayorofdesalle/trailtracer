const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.port | 3000;

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});

//HOME
app.get('/', (req, res) => {
    res.send('This is home!');
});

const db = require('./src/services/db.service');
app.get('/trails/:id', async (req, res) => {
    const trail = await db.trailById(req.params.id);
    res.send(trail);
}); 
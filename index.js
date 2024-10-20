const express = require('express');
const app = express();
const PORT = process.env.PORT || 12000;

app.get('/', (req, res) => {
    res.send('Hello from Mariana, using Heroku for the first time!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

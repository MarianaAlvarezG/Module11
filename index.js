const express = require('express');
const app = express();
const PORT = process.env.PORT || 12000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Homework</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #0f0909;
                    font-family: Arial, sans-serif;
                }
        
                .center-text {
                    text-align: center;
                }
        
                .welcome {
                    color: #3498db;
                    font-size: 2.5rem;
                    font-weight: bold;
                }
        
                .message-red {
                    color: #e74c3c;
                    font-size: 1.5rem;
                }
        
                .message-yellow {
                    color: #f1c40f;
                    font-size: 1.5rem;
                }
            </style>
        </head>
        <body>
            <div class="center-text">
                <h1 class="welcome">Welcome to my Module 11 Homework!</h1>
                <p class="message-red">It´s almost Halloween!</p>
                <p class="message-yellow">I can´t wait!</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

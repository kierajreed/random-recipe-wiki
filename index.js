const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const recipeFilenames = fs.readdirSync('./public/recipes');
const recipes = recipeFilenames.map(e => [e.slice(0,-5), require(`./public/recipes/${e}`).name]);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/recipe', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/recipe.html'));
});
app.post('/recipes', (req, res) => {
    res.send(JSON.stringify(recipes));
});

app.listen(8080);
console.log('Website started!');
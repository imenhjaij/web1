const express = require('express');
const app = express();
const projetController = require('./controllers/projetController');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', projetController);
// Route pour afficher l'espace client
app.get('/espace-client', (req, res) => {
    res.render('espace_client');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

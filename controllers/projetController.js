const express = require('express');
const router = express.Router();
const db = require('../db');

const Projet = require('../models/projet'); // Importer le modèle de projet

// Route pour afficher la liste des projets
router.get('/projets', async (req, res) => {
  try {
    const projets = await Projet.find(); // Récupérer tous les projets depuis la base de données
    res.render('liste_projets', { projets }); // Afficher la page liste_projets avec les projets
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour afficher les détails d'un projet spécifique
router.get('/projet/:id', async (req, res) => {
  // Logique pour récupérer les détails du projet en fonction de l'ID
  // Afficher la page detail_projet avec les détails du projet
});

// Route pour créer un nouveau projet
router.post('/creation-projet', async (req, res) => {
  // Logique pour créer un nouveau projet en utilisant les données du formulaire
  // Rediriger vers la page liste_projets ou afficher un message de succès
});

module.exports = router;

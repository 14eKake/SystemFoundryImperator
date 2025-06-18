# Imperator - Système Foundry VTT

Ce dépôt contient un exemple minimal de système de jeu **Imperator** pour Foundry VTT.

## Installation
1. Téléchargez ce dépôt puis compressez-le au format ZIP.
2. Placez l'archive dans le dossier `Data/systems` de Foundry VTT et décompressez-la.
3. Depuis la page d'administration de Foundry, activez le système "Imperator" lors de la création d'un monde.

## Contenu
- `system.json` : fichier principal décrivant le système.
- `templates/actor-sheet.html` : fiche de personnage.
- `scripts/actor.js` et `scripts/dice.js` : logique des feuilles et des jets de dés.
- `styles/system.css` : styles de base.
- `lang/fr.json` : localisations françaises.
- `packs/competences.db` : pack d'exemple contenant quelques compétences.
- `packs/carrieres.db` : exemples de carrières pouvant être glissées sur la fiche.

Ce système propose quatre caractéristiques principales (Corpus, Charisma, Sensus, Spiritus) et un système de jets utilisant des dés à 10 faces (d10).

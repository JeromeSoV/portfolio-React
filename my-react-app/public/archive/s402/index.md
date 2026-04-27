---
title : "SAÉ 4.02 - Développement d'une application complexe"
author : ["Jérôme SAUVÉ","Corentin LORMIER","Noah HOYLAERTS"]
date : "2020-04-01"
tags : ["TypeScript","NodeJS","Socket.io"]
summary : "Création d'un jeu navigateur multijoueur de type shmup."
---

## Description du projet

Réalisation en un mois d'un jeu multijoueur de type shoot'em up. Le jeu est jouable côté client, le client se basant sur une Single Page App.
La stack technique devait comporter :
- TypeScript
- Canvas HTML
- Tests validés par le Node test runner
- NodeJS
- Socket.io

Et présenter des pages obligatoires, avec une page de connexion, une page de jeu et une page crédits.
Nous avons fait le choix de faire un shmup empruntant la licence Pokémon, avec une boucle de gameplay où le joueur
contrôle une équipe de 3 Pokémon, et qui navigue dans un donjon généré procéduralement, rencontrant ennemis et boss de plus en plus fort 
à chaque nouvel étage.

## Compétences

- Git
    - Planification
    - Gestion de branches
    - Gestion de commits
    - Utilisation de l'Issue Board, de Milestones
- TypeScript
    - Frontend
      - Création d'une Single Page App
      - Gestion de modes de saisies (clavier/souris)
      - Gestion des évènements de jeu
    - Backend
      - Création d'un moteur de jeu basique (déplacement, tirs, collisions, IA d'ennemis, évènements d'intéraction)
      - Création d'algorithmes de génération procéduraux
      - Gestion des comptes de jeu
    - Tests
- NodeJS
  - Unit tests
  - Gestion serveur
- Socket.io
  - Gestion de WebSockets
  - Gestion de la communication bidirectionnelle entre le client et le serveur
- HTML Canvas
  - Moteur basique de rendu du jeu


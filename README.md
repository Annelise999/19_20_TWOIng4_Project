
# Projet DashBoard

Projet d'Anne-Lise Herve & Joseph Dupont

Lien du Air Table : https://airtable.com/tblWgsBvufBMAKgcV/viwCwb87GLMAW2sVU?blocks=hide

Lien du Figma : https://www.figma.com/files/project/4881404/User-interface


Modules nécessaires:

    "axios": "^0.19.0",
    "bootstrap": "^4.3.1",
    "react": "^16.12.0",
    "react-bootstrap": "^1.0.0-beta.16",
    "react-dom": "^16.11.0",
    "react-image-gallery": "^0.9.1",
    "react-live-clock": "^3.1.0",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.2.0",
    "reactstrap": "^8.2.0",
    "recharts": "^1.8.5"



Lors de la premiere requete POST nous avons pas reussi a Linker avec les tables de la bdd données.

Les requetes POST ont alors créées trois nouvelles tables : users, measures, sensors.

Nous avons donc re-importé les tables du .zip dans ces trois nouvelles tables.

# Lancement du Dashboard

Lancer d'abord le dossier Backend 2.O sur le localhost 3000.

    npm start //dans le dossier backend 2.0

Puis lancer le Front sur un autre port (ex localhost 3001)

    npm start //dans le dossier frontend

Nous avons utiliser des extensions Cors permettant de lier le Front et le Back sans problèmes.
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
et
https://chrome.google.com/webstore/detail/cors-helper/jckpaobldaolbbchaeicopkcljcaiaka


# Fonctionnement du Dashboard

En arrivant arrivant sur le Dashboard, nous sommes directement sur la page Home.
Dans le Haut de page de la page, on peut choisir quel user on affiche, les données des widgets s'adaptent à chaque user, grâce à la BDD.

 - Widget Bar Chart : Moyenne par mois des données  "température" de tous les capteur du user.
 - Widget Line Chart : Moyenne par mois des données  "humidité" de tous les capteur du user. 
 - Widget Nombre de capteur fonctionnels : indique le nombre de sensor appartenant au user.
 - Widget heure : indique l'heure en temps réel.
 - Widget tableau info user : indique les informations du  user (pays, taille de la maison, nombre de personnes).
 - Widget Gallerie : affiche les photos de la maison (non relié avec la bdd).
 - Widget Camembert : affiche le dernier pourcentage d'air pollué rentré sur un des capteurs du user.
 - Tableaux des capteurs :  valeur la plus haute jamais rentrée pour chaque type de capteur



En cliquant sur le bouton de navigation Admin, on accède sur la page dans laquelle nous pouvons remplir des formulaire pour donner de la data à notre BDD.
Quand on change de page, le user se remet à sa valeur par défaut.
S'il on veut voir l'évolution des widgets, il faut donc rechoisir l'user pour lequel de la donnée a été ajouté.


Les différents formulaire:

 - Ajouter un User, en indiquant la nombre de personne dans la maison, sa localisation, et la taille de la maison.
 - Supprimer un user en cherchant dans le menu déroulant son ID.
 - Modifier un User et ses données.
 - Ajouter une information sur la qualité de l'air.
 - Ajouter une température pour un capteur de l'user.
 - Ajouter une information sur l'humidité pour un capteur de l'user.
 - Ajouter un capteur

Tous les ajouts sont enregistrés à la date du moment.

# Projet de fin de semestre

A lire impérativement avant de commencer quoi que ce soit, ce sont les règles que vous devrez appliquer tout au long du semestre:

<p align="center">
 <a href="https://github.com/clementAC/Instructions-Technologies-Web-OCRES-Ing4/blob/master/README.md">Règles pour le semestre</a>
</p>

## Introduction

Ce repo git contient deux repertoires. L'un concerne la partie backend et l'autre la partie frontend.

Les deux repertoires ont été initialisé pour vous aider à démarrer le projet dans les meilleures conditions.

Chacun de ces repertoires contient un README.md qui vous pouvez vous approprier. Nous vous encourageons à le faire en y mettant toute les informations nécessaires à la compréhension de votre projet

## Instructions

Les instructions sont à retrouver dans le pdf mis à disposition sur campus.

**Le non respect de ces instructions entraînera des pertes de points alors prenez le temps de tout lire et de poser des questions si vous ne comprenez pas**

Pour rappel, la probabilité de recevoir une réponse à un mail envoyé quelques heures avant le rendu est très proche de 0.

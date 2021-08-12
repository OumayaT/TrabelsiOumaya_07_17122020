# Projet 7 - Groupomania #
7ème et dernier projet de la formation développeur web d'Openclassrooms. Créer un réseau social d'entreprise. La stack utilisée pour ce projet:

VueJs + vuex 
NodeJs + express + sequelize
Mysql



# Base de données #

Se connecter au serveur MySql de votre choix.
Exécuter la commande: CREATE DATABASE groupomania;
Créer un utilisateur de votre choix et lui attribuer un mot de passe en exécutant les commandes comme suit: 



`CREATE USER 'NameUSER' IDENTIFIED BY 'PASSWORDuser';` 

`GRANT ALL ON Groupomania.* TO 'USER';`


# Frontend #

Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:

`npm install`  

puis

`npm run serve`
si le navigateur ne s'ouvre pas automatiquement allez à :

`http://localhost:8080/`

# Backend #
DANS LE DOSSIER BACKEND
Ouvrez le fichier " .env.initial " : vous devez assigner des valeurs aux 3 variables suivantes:
### DB_NAME =   ### ( nom de votre base de données)
### USER =    ###
### PASSWORD =  ###
### TOKEN_SECRET = ###


DB_NAME: 
USER: nom d'utilisateur
PASSWORD : mot de passe utilisateur
TKN_SECRET = variable de votre choix.

Renommer ce dossier " .env " à la place de " .env.initial ".

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

`npm install`

puis

`npm start ou nodemon serve`




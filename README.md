# Festiplanner App

## Installation

### Base de données
*(Installez et démarrez **Docker** si ce n'est pas déjà fait !)*

Dans un terminal :

`docker run --name festiplanner -p 5432:5432 -e POSTGRES_DB=festiplanner -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d postgres`

Après avoir cloné le repository sur votre machine, placez-vous au niveau du projet dans un terminal et lancez :

`npx prisma migrate dev`

Votre BDD devrait être configurée et déployée en local !

### Codebase
Avant de démarrer le serveur Next, pensez à installer les modules Node :

`npm install`

Puis :

`npm run dev`

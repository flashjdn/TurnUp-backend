# TurnUp
## Backend repository

TurnUp is an app that allows users to search for free events either nearby or from a search query. Click here to see the deployed site: https://production.d3hv43jagk7qg5.amplifyapp.com/

## Tech Stack

In this project we used Node.js and Express frameworks on the server-side. We also used dotenv package to protect server credentials in .env file. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. Please note that this is only the server-side code of the turnUp app and to get the full experience you'll need to visit [final-project_front-end-slack-ops](https://github.com/SchoolOfCode/final-project_front-end-slack-ops) and follow the instructions there.

### Installation

This is a step by step guide that will tell you how to get the development environment up and running.

```
$ Clone this repository
$ Create a .env file inside the main folder of the app.
$ In the .env file you will need the following variables with corresponding values from your database credentials (we recommend heroku as the database provider): 
 - PORT: 3000
 - PGUSER=xxxxxxxxxxxxxx
 - PGHOST=xxx-xx-xxx-xx-xxx.xx-xxxxt-x.xxxxx.xxxxx.xxx
 - PGPORT=xxxx
 - PGPASSWORD=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 - PGDATABASE=xxxxxxxxxxx

$ run "npm i" in the console to download the necessary npm packages
```

## Deployment

To deploy the server on your local machine you need to type the following command into the console after completing the steps above:

```
$ npm run dev
```

### Server

* Live: https://production.d3hv43jagk7qg5.amplifyapp.com/
* Development: localhost:3000

### Branches

* Master: main
* Development: <deleted> Create a new dev branch.

Any feedback is appreciated. If you have any questions, get in touch with the team: 

[Kal Hollywood](https://github.com/kalhollywood)
[Jordan Flash](https://github.com/flashjdn)
[Simon Bowen](https://github.com/sibowen535)
[Owen Bovill](https://github.com/OwenB-HamD)
[Patryk Kielsa](https://github.com/MightyKielsa)


FRONTEND REPO: https://github.com/SchoolOfCode/final-project_front-end-slack-ops

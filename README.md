Contest App 
============

## Description

Its realtime contest app, which exposes contests over UI (Web and Mobile), gives feature to Create contest, give vote and generate the results.
Tech stack - 
Web - React, Redux, Socket.io
Backend - Node, Sockets, Express

## Installation

# Server : 

```bash
cd server
npm install
npm start

# starts server on port 3001
# api
http://localhost:3001/api

```

# Admin Web Client : 

Go to another terminal tab

```bash
cd client-web
npm install
npm start

# starts server on port 3000
# UI
http://localhost:3000

```

# Cordova App : 

Go to another terminal tab

```bash
cd mobile-app
cordova build browser
cordova run

# starts app on browser server on port 8000
# App
http://localhost:8000

```

## Config.

Contest config could be changed in _./src/server/topics.json_.

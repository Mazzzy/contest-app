Contest App 
============

## Description

Its realtime contest app, which exposes contests over UI (Web and Mobile), gives feature to Create contest, give vote and generate the results.
Tech stack - 
Web - React, Redux
Backend - Node, Sockets, Express
Mobile App - Cordova-VanillaJS, Maps, Sockets.

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

# Details :

## Mobile App - 
- Takes geolocation of user, emit co-ordinates towards server
- Get Contest details from server based on the matched co-ordinates
- Process the Contest details, take all users and respective co-ordinates details from it.
- Place markers on the map
- On click of marker, displays map-info box with username
- On click of map-info box, opens the modal with username, image and Swipe feature
- Swipe left / right on the modal to vote
- After swipe vote details get sent towards server
- Realtime sync of data using socket.io

## Server App - 
- Receives geolocation of user
- Send Contest details based on the matched co-ordinates
- Send Connected users details to all
- Receive vote details from client and update data
- Realtime sync of data using socket.io

## Web App - Admin Panel
- Create Contest by entering details : 
    Contest name, desc, start date, end date, 
    entrants (name of users - comma seperate), 
    co-ordinates ( JS object seperated by "+" ) -- [format {lat:<val>, lng:<val>} + {lat:<val>, lng: <val>} ]
- View Contest Details
- Edit Contest Details
- Delete Contest Details


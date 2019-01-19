Contest App 
============

## Description

Its realtime contest app, which exposes contests over UI (Web and Mobile), gives feature to Create contest, give vote and generate the results.
Tech stack - 
Web - React, Redux, Socket.io
Backend - Node, Sockets, Express

## Installation

```bash
cd contest-app
yarn

#start
## server
yarn start:server
## client
yarn start:client

open http://localhost:3000/contest        <-- contest to vote
open http://localhost:3000/results        <-- results
```

## Config.

Contest config could be changed in _./src/server/topics.json_.

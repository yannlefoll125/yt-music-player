# yt-music-player

yt-music-player is a youtube proxy application. It aims to make listening to full music albums on youtube easier. The base idea is to give a music player like GUI to play/pause and select songs in a 'full album video' 

What it does for the moment is: 
- Search an artist or album using the [Youtube Data Rest API](https://developers.google.com/youtube/v3/) (the search field adds 'full album' after the query)
- The application searches the video description to find a track list, and tries to parse it to get the title and the start time (in the video) of each track

In development:
- Use [musicbrainz API](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2) to find information of artist, albums, album tracks to refine youtube search and track listing

For later:
- User space for favorites
- Playlists
- Chat between users


## About the project

This project is mainly about praticing:
- AngularJS/NodeJS
- Software design, development and testing (experiment with test driven development)
- Learn recent tools: Gulp, Yeoman, etc...


This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.1.2.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

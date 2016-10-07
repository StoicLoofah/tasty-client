# Tasty Client

This is the frontend client for Tasty, a bookmarking web app inspired by delicious. It should be used in conjunction with [tasty-server](https://github.com/StoicLoofah/tasty-server).

Currently, it supports viewing and editing bookmarks and tags, but it does not offer any authentication for user-specific data.

It is built using Angular 2 and TypeScript through [angular-cli](https://github.com/angular/angular-cli).

This project was built during Zanbato Hack Week Fall 2016.

## Setup

You can use angular-cli as expected. To get the client running,

1. Install Node.js
2. Install angular-cli globally according to its instructions
3. Check out this repo and `cd` into it
4. `npm install` all of the packages for this project
5. Setup a tasty-server.
6. Create a `app/src/secrets.ts` with a reference to the tasty-server e.g. `export const SERVER_URL: string = 'http://localhost:10010/';`
6. Launch the client with `ng serve` and navigate to the site at `http://localhost:4200`.

For development, I ran it locally on OSX 10.11 and installed Node.js and MongoDB through Homebrew.

## Additional Notes

This project has not progressed far enough to use any real build tools. angular-cli offers:

* `ng build` to build the project
* `ng test` to run unit tests
* `ng e2e` to run end-to-end tests
* `ng github-pages:deploy` to deploy to Github Pages

However, no tests have been written, and no build or deployment has been attempted

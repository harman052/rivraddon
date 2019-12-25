# rivraddon

Tracks [Prebid.js](http://prebid.org/developers.html) events.

## Installation

In order to run the app you need install dependencies.

### npm

Installing dependencies via `npm`:

`cd /project/root/directory`

`npm i`

### yarn

Installing dependencies via `npm`:

`cd /project/root/directory`

`yarn install`

## Running the app

Once all the dependencies are installed, you can run the app from the project root directory with:

### npm

`npm start`

### yarn

`yarn start`

Open [http://localhost:8080](http://localhost:8080) to view app in the browser.

## Tests

Jest testing framework is used for writing unit tests.

### Unit tests

Runs all unit tests with:

`npm test` <br/>or<br/>
`yarn test`

By default, test coverage report is turned off. Run following to see coverage report in test logs:

`npm run test:coverage` <br/>or<br/>
`yarn test:coverage`

You can also turn coverage report on in `jest.config.js` to run it evertime tests run. In `jest.config.js`, set `collectCoverage` to `true`.

## Build

Generate production build with:

`npm run build` <br/>or<br/>
`yarn build`

Output will be stored in `./build` directory.

## Tools and utilities used

- [babel](https://babeljs.io/) - Enable the use of commonly used and very helpful ES6+ features in backward compatible way.
- [webpack](https://webpack.js.org/) - JavaScript module bundler. It also provides a built in [development server](https://webpack.js.org/configuration/dev-server/) for serving files.
- [Jest](https://jestjs.io/) - JavaScript testing framework.

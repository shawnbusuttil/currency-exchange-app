This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Decision Making

There is a main container that manages wallet exchange (PocketManager). For brevity and because Redux wasn't really necessary for this project, hooks were used. I did leave a proof of concept store folder for you to see how I would do it, however. Alternatively, useState in PocketManager would be replaced with mapDispatch/StateToProps if Redux is used.

Redux would make more sense if different pages were used in the application.

For testing, the react testing library was used to enforce black-box testing and holds an advantage over enzyme when testing components with hooks, which can have issues.

## Possible Improvements

UX: Better user feedback on error. When failing to get rates, we would keep the pockets showing but display a toast message saying the latest rates were not fetched successfully.

Tech: More test coverage, integration, e2e.

Tech: Better style encapsulation with css modules or styled components.

UX: The keypad isn't functional. To do this, without a real mobile platform, you'd need to attach event handlers to pass the input and also the tricky part is keeping track of where the input caret is in the field before changing the input.

## Issues to be Aware Of

Currently, because the API key is a trial version and my credit card didn't get charged successfully on trying to upgrade - you cannot exchange FROM euros. You can exchange to, however. So switching to the Euro pocket will trigger an error and you will have to refresh.

But if you watch the network tab, the request is correct.

## Available Scripts

In the project directory, you can run:

### `yarn start:server`

Runs the app in the production mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn start:client`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn server`

Runs the mock server. This is by no means a production server.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

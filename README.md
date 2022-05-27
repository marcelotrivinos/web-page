# React Project

This project shows several products by category, the product information is obtained from a get request (using axios), redux and redux-thunk are used for state management (state management is asynchronous), the server is implemented using json-server, unit tests using Jest and integration tests using Cypress were also implemented.

## Available Scripts

In the project directory, you can run:

### `npm start`

**Note: before run the server with `npm run server`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run server`

Run the server with the data. \
Open [http://localhost:8080/data](http://localhost:8080/data) to view it in your browser.

### `npx cypress open`

This opens Cypress. If you run Cypress for the first time and do not run because the timeout term, then configure a variable from enviroment at 100000 or 500000 (or at higher value).

In Shell it would be: `$env:CYPRESS_VERIFY_TIMEOUT=100000`

Then run `npm run cypress`

### `npm run cypress`

Run Cypress.

If you run Cypress for the first time and do not run because the timeout term, then configure a variable from enviroment at 100000 or 500000 (or at higher value).

In Shell it would be: $env:CYPRESS_VERIFY_TIMEOUT=100000

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

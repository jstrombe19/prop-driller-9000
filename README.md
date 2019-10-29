Welcome to Prop Driller 9000!

In this exercise, you will get some reps in assigning values to state in the App component
and passing those values down to child components as props. You will need to be
proficient at this, as it is a major part of React. If you feel like this is daunting,
I promise it isn't as difficult as you are making it out to be.

The Proptobots are here to help the inhabitants of Earth, but their communications
system is down. In the event of an emergency, you will need to sound the alarm and call
for help. In response to clicking on the callForHelp image, which should always be
displayed in your app, the first Proptobot - Proptimus Omega should display, along
with the associated console.log, catchphrase, and inquiry from the AI that inhabits
callForHelp.

If Proptimus Omega is not up to the task at hand, clicking on his image will sound
the alarm again, and bring in Proptimus Beta. Proptimus Omega should no longer be displayed
but should be replaced by Proptimus Beta, again with his associated catchphrase,
console.log, and inquiry from callForHelp. If even the mighty Proptimus Beta is
insufficient for your needs, you can gimmeAllYouGot and call for Proptimus Prime.

Again, Proptimus Beta should disappear and be replaced with Proptimus Prime, his
catchphrase, console.log, and the commentary from callForHelp. When the conflict
has resolved itself, clicking on Proptimus Prime dismisses him for some much needed
R & R, and he parts with a stirring speech printed to the console, because Proptobots
can decode it from there and stay safe from the DeceptIcons.

Once you have Proptimus Omega rendering, you shouldn't have any further issues getting
the Proptobots to display. All functions are already defined for you. The images for
the Proptobots are already in state, but their catchphrases need to be added. Both
of these need to be passed through as props to the child components.

If you need a reference, there is a gif walkthrough and a larger, 720p .mov Demo video.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

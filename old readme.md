Work Log:   
2/28/2020  

    8:00 -- Attempted to import Tone.js library into a straight js file with index.html. Ran into CORS issues.  
    8:30 -- New attempt with a project made with create-react-app  
    9:00 -- Successfully loaded Tone.js into a React app and put it in a separate component  
    9:30 -- Watching a tutorial series where someone sets up Tone.js in a project: https://www.youtube.com/watch?v=8u1aQdG5Nrk  
    10:30 -- Added a kick that plays back 4 on the floor  
    11:00 -- Succesfully Logged transport time in ticks with the clock and a button click  
    11:30 -- Found that adding event listener with 'keydown' has wayy less latency (still some) than doing an onClick event. Keyboards are in y'all.  
    12:30 -- Attempting to load samples via Tone.Buffer / Tone.Player. Not working yet.  
    1:00 -- Successfully got sample to play (reminder: remember to use an import statement at the top!)  
    2:00 -- Scaffolding actual application architecture. Realized setting latency to fastest prevents scheduling events (ie: sequencer). Set up listening function.  
    2:30 -- After setting up listener functions / transport start/stop controls suddenly latency mode doesn't seem to matter with scheduling? Investigating  
    2:45 -- Idea: everytime you hit a 'target measure' (to listen to user input) reset the transport? If there's no delay then you can accurately measure time.  
    If not then maybe there's a way to reset ticks?  
    3:00 -- Lunch
    4:00 -- Attempting to set up sequence. Currently uneven due to how events are scheduled? Latency compensation might be messing this up.   
    4:30 -- Discovered interesting thing where initial latencyHint needs to be set to interactive first or the audio doesn't play but is much more even when switched back over.  
    4:45 -- Added a difference calculator from the beat to the user input.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify 

# The Rhythm Coach (title pending)
V 0.1
### Created by Peter Wells

## Purpose
This app is designed to  improved your sense of timing by gamifying your accuracy to a target rhythm which you set.

## How to use
Simply press play and try to hit the notes on time with either the tap button on the control panel or the 's' key on your keyboard.

## Available Scripts

This project uses the package manager [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

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

## Known Bugs
* ~~Currently there is a known issue where sometimes the next tick will come back as NaN if there are no targets set or if it hasn't reached that target note yet.~~
* Appears to have compatability issues with Firefox as well. Audio engine will periodically stop running and start.

## Support and contact
If you have any issues viewing this site or any general questions about it please email me at
_PeteTheBeatWells@gmail.com_

## Technologies Used
**React**  
for general site design and display  
**Redux**  
for updating display state  
**Tone.js and JavaScript**  
for the audio engine and game logic

### License
Copyright (c) 2020 Peter Wells  
Licensed under the GPL license.

_Last updated 3/12/2020_



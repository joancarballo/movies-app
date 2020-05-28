# movies-app

A SPA to save watched movies

# Inspiration

A tech prove.

# To-Do

- Use redux to implement the handling of state.
- Create an input where user can add the movie name they would like to watch.
- Create another input where user can add movie genres as tags.
- Each movie can have more than one genres.
- When user presses enter on genre input, it should show those genres below the movie name input.
- User can add the same genre more than once and press enter; but that genre shouldn't show it the list again.
- Genres should be case insensitive. Use should not be able to add horror and Horror.
- Create a submit button where user can click to submit there movie.
- All the movies should show in a list where below the form with the following fields:- 1. Checkbox that shows if movie is watched or not. 2. Movie name. 3. Genres. 4. Delete button.
- Watched/Checked movies should move down to the bottom of the list.
- If user unchecks a movie it should move to its original place.
- Add three radio buttons at the top of the list which say Horror, Romance, Comedy and a reset button.
- All the radio buttons should be unchecked by default.
- Selecting any of the radio buttons should show only the movies which are in that genre.
- Clicking on the reset button should show original list.
- Add an input above the list and below the radio buttons where user can search the movies based on their name.
- Show a loader when adding a movie or deleting a movie or searching for a movie. The delay should be 3 seconds.
- If go to route like /genre=romance, it should redirect me to a new page which should show the loader for 3 seconds and then only movies which have that genre.

> ### Extra points:-

- Add an edit button in the movie list. Clicking on the button should turn the movie name into an input tag with the movie name in it and also show a save button. Which user can then edit and save.

## --------------

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

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

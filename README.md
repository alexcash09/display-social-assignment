# Display Take-Home

Welcome to the Display take-home interview!

Check out the [prompt](PROMPT.md) to get started.

## Technologies Used

React
React Bootstrap
yarn


The app is hosted in the app directory. See "Available Scripts" section on how to run the application.

This app runs in a standard web browser (chrome and firefox currently only browsers tested)

For more details about what still needs to be finished with the project and how I would handle it see [TODOS](https://github.com/alexcash09/display-social-assignment/issues?q=TODO)

For more details on future enhancements see [ENHANCEMENTS](https://github.com/alexcash09/display-social-assignment/issues?q=ENHANCEMENT)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### currently tests are not setup right now so this will do nothing. see [Issues](https://github.com/alexcash09/display-social-assignment/issues) for more information about what still needs to be done. 

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

To deploy the application I copied all the files in the build folder to the display folder. 

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## README Questions:

The following are some sample questions for you to get started on your README, but feel free to format it in any way you see fit.

## Describe any important assumptions that you have made in your code.
 - this app should run in a standard browser
 - to get the types of input of the repsonse you need to have both type and content for the password
 - there needs to be a login button in the response.json
     - button types can also be configured to use different logins (facebook, twitterm, github, etc)

## What edge cases have you considered in your code? What edge cases have you yet to handle?


## What are some things you would like to do if you had more time?
- put the json response in http service
- add unit tests to the components
- add end to end tests for the whole app with customizations
- add custom styling
- convert to typescript
- add different types of authentication (facebook, github, etc.)
- separate out different form controls (input types, passwords, captcha)
- implement the login functionality


## Is there anything you would have to change about the design of your current code to do these things? Give a rough outline of how you might implement these ideas.



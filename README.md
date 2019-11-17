# Personal Website

https://russell-brady.github.io/personal_website/

### Set up

You may wish to fork this repository or remove my remote origin and add your own. 

To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/russell-brady/personal_website.git
cd react-app
npm install
```

### Changing the data in the website

In order to change the data in the website, open the resumeData.json file inside the public folder in react-app. All of the personal data which is populated in the app comes from this folder. 

The website also points towards my personal github account using github api to display all of my current github repos. This can be changed inside app.js:

```javascript

  getGithubRepos(){
    fetch('https://API.github.com/users/russell-brady/repos')
    .then((response) => response.json())
    .then((findresponse)=> {
      this.setState({
        githubRepos:findresponse
      })
    })
  } 

```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

First, change directory into react-app:

### `cd react-app`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

I also have this application set up to deploy to github pages - See their docs to see how easily this can be set up. 
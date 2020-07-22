
This file should be viewed from [github](https://github.com/seanmortimer/cohort4-group). Do not view from an editor.

This project is the "Final Project" project for the EvovleU Full Stack Development program. It is a baseline to demonstrate:

- development environment
- development tools
- best practices
- REST APIs with Flask and Python
- React app

## Required Tools

See the README.md for the main repository for tool setup instructions in [github](https://github.com/seanmortimer/cohort4-group).


## Setup Instructions

Once all the base tools are installed this is the instructions to run the first sample project.

1. Install the dependencies required for the project. This command looks at the 'package.json' file and installs all of the dependencies. You must be in the correct directory to run this.  
```sh
cd cohort4-group

npm i

```
2. Run the automated unit tests to ensure the code works as advertised. 
```sh
npm pytest
```
All the tests should run.

3. Start the application. 
```sh
npm start
live-server
```
Look through the application.

## Dissecting what's there

1. Notice the directory structure. It may not be exact, but it will be close.
```
reference/
  front-end/
  node_modules/
  resources/
      __init__/
      checklist.py
      entry.py
      user.py
pipfile
pipfile.lock
README.md
.gitignore
```
If you do not see the files that start with '.' you will have to 'show hidden files' in your explorer / file manager.

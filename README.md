# student_school_tutorial

https://www.youtube.com/watch?v=4yqu8YF29cU

Main Learning Objective:
1. To reinforce the objectives from the previous local library tutorial.
2. Learn about other development tools

Challenges:
1. Understanding the templating format. Because Turbo uses mustache as a html template, there was some documentation that needed to be looked through to figure out how everything came together.
2. Connections connections connections. Keeping track of how everything connects together and where it comes from is always a challenge. Seems more so in javascript than any other language for some reason.

Like the previous tutorial, this project itself won't be of much use except for reference documentation. Following the format of the tutorial, I would again still struture everything differently. Haven't yet decided upon which template format I like using yet.


# Default created readme when project was created

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

## Instructions
After cloning into repo, cd to project root directory and create a .env file. This file requires a TURBO_APP_ID and SESSION_SECRET keys:

```
TURBO_ENV=dev
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=123abc
```

Then run npm install from the root directory:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```


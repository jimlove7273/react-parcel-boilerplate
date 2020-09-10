# React Parcel Boilerplate
This project was created with React-Parcel-Boilerplate by Jim Tseng
## The Idea
While most of the time we'd use create-react-app to spin up a new React application, where it uses webpack and other tools to create a new app, I like to try using the Parcel bundler for my React applications.

The official Parcel bundler website: https://parceljs.org/

## What I like about Parcel
The idea of Parcel is similar to Webpack, where it could bundle up your JavaScript, CSS/Sass, and other assets.  Parcel can further bundle up your HTML and image files as well.  The upside of Parcel is -- there is ZERO configuration.  It means you do not need to create any config file, or something ..rc file, and it just does everything automatically.  AND, the final result of Parcle outform WebPack by 1/10 of its speed, making it a perfect solution to deliver your application to production.

## Using the Boilerplate
There is no setup need to use the boilerplate.  Once cloned, you just run
```sh
$ npm install
```
This will install the dependencies you need to run your React application:

- react
- react-dom
- parcel-bundler
- babel
- immer*
- use-immer*

\* You are welcome to remove "immer" and "use-immer" if you don't intend to use them.

## Running Your React App
To Run your Rect App for Development
```sh
$ npm run start
```

To Build your Rect App for Production
```sh
$ npm run build
```




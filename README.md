# Shape drawer

Welcome to shape drawer! This app will allow you to upload one image of your choosing to an empty canvas
and then draw shapes of your choosing on it.

## How it works

Powered with fabric JS, first you will need to upload an image from your PC using the "Upload" button,
then the Draw option will become available. Once you click on "Draw" you will be able to click in your photo
and place points on it, rendering a shape. While you place them, there will be able to see how the shape would look like.

To render a shape, you just need to click on the first point, then on the box on the left side, an input will be rendered wher you can name
the shape you just created. Once it lost is focus, the shape will be named and it will be disabled.

To restart the whole canvas, you can upload a new photo or refresh your browser.

## Set up
There are three ways to set up the app:

   1. **Using react and NPM**:
	 If you have installed NodeJS and NPM in your local machine, you can start the application with the following commands:
     1. **npm install**
     2. **npm run build**
	 3. **npm run start**

	 This will automatically open your browser at the the URL **https://localhost:3000/** where you will be able to see the app.

  2. **Using Docker**
    If you happend to have docker installed you can just run:
	1. **docker compose build**
	2. **docker compose up**

	And the app will be rendered as well.

  3. **Using your browser**
    If you go to the following URL **https://shape-drawer.herokuapp.com** you will also find the app hosted on Heroku.



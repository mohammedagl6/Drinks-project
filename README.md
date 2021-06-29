
[Demo](https://mohammedagl6.github.io/Drinks-project/)
# Getting Started

This repository functions as the basis of the quiz project in the [Browsers module](https://github.com/HackYourFuture/Browsers). Before the first group meeting, have a look through this code and try to understand how it works and how it is organised. We will explain the idea behind the structure below as well as the Backlog (which will identify what is needed to be implemented).

We have already implemented a very basic UI that can go through the questions to show you how this kind of code is split and how you can use the structure to your advantage. Have a look through it before your first group meeting as it can take a little while to get your head around it!

## Development

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work.

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

# Structure

Let's run through the folders:

```
public
src
└── handlers
└── init
└── listeners
└── utils
└── views
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
- `handlers` this contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
- `init` this contains our initialisation code. Generally this code should only run once and starts the application
- `listeners` this contains our code that links up our handler code to the DOM. This is separate because it is possible to have the same handler code be given to different listeners
- `utils` this contains code that are pure functions and can be used throughout the application. These functions take data and give back a result. They should not interact with anything outside of their scope!
- `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the handlers do.
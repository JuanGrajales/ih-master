const express = require('express')  // think of require kinda of like import, in order to use express and express function we need to require (i.e. import) it
const app = express()               // this creates an instance of express and you set it to app so later on when you want to use an express function you will call app.whateverExpressFunctionYouWant, similar to when we created JS classes and created an instance of the object using the constructor
const port = 3000                   // this isn't necessary but later on we might change our port so instead of having to refactor 3000 in many places we just have to change the const at the top

app.use(express.static('public')) // the public folder as the folder where images go, I think, double check this

/**
 * .get takes two parameters
 * param 1 - is the url, when someone goes to the specified url is will activate this route
 * param 2 - the function that tells express what your server will send back
 * req and res are shorthand for request and response, req and res are the naming conventions, if you look at someones express app they will likely be using req and res instead of response and request
 * routing - refers to how the an application will respond to a client request when the client goes to a particular endpoint (i.e. URI or path)
 * basic route syntax - app.METHOD(URL, HANDLER-FUNCTION), these route methods can have more than one handler function but don't worry about using more than one for now
 */
app.get('/', (req, res, next) => {
  console.log("hi",req, next)
  res.send('Hello World!');
});

app.get('/home', (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html")
})


app.get('/info', (req, res, next) => {
  console.log(req, next)
  res.json({
      "total": 22,
      "result": [
      {
      "categories": [],
      "created_at": "2020-01-05 13:42:18.823766",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "eyybzzcqse6ls_xwlbyscg",
      "updated_at": "2020-01-05 13:42:18.823766",
      "url": "https://api.chucknorris.io/jokes/eyybzzcqse6ls_xwlbyscg",
      "value": "Chuck Norris invented a language that incorporates karate and roundhouse kicks. So next time Chuck Norris is kicking your ass, don?t be offended or hurt, he may be just trying to tell you he likes your hat."
      },
      {
      "categories": [],
      "created_at": "2020-01-05 13:42:19.104863",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "lyyuxeoxtwqd-oibq6_zqa",
      "updated_at": "2020-01-05 13:42:19.104863",
      "url": "https://api.chucknorris.io/jokes/lyyuxeoxtwqd-oibq6_zqa",
      "value": "Chuck Norris invented his own type of karate. It's called Chuck-Will-Kill."
      }
      ]
      })
})

/**
 * .listen can take multiple params (this example will show how to use two), it tells your app to listen for connections on the given path
 * param 1 - the path the server will be listening to, in this case we are using port 3000 in this local machine,
 * param 2 - the second param is a callback function, .listen will work just with the path but I also want to show a message to myself to show that the server is running correctly, 
 */
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
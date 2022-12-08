Express is a lightweight web application framework, and is one of the most popular packages on npm. Express makes it much easier to create a server and handle routing for your application, which handles things like directing people to the correct page when they visit a certain endpoint like /blog.

you can easily create an Express app object like..
let express = require('express');
let app = express();

This object has several methods, One fundamental method is app.listen(port). It tells your server to listen on a given port, putting it in running state. 

Let’s serve our first string! In Express, routes takes the following structure:

app.METHOD(PATH, HANDLER)
METHOD is an http method in lowercase. 
PATH is a relative path on the server (it can be a string, or even a regular expression). 
HANDLER is a function that Express calls when the route is matched. 
Handlers take the form 
function(req, res) {
  res.send('Response String');
}
here, will serve the string 'Response String'.
where req is the request object, and res is the response object. For example, the handler
here, will serve the string 'Response String'.

Final syntax like
app.METHOD(PATH, function(req,res){})

You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. Recommended to use the Node global variable __dirname to calculate the path like this:

let express = require('express');
let app = express();

app.get("/",function(req,res){
  res.sendfile(__dirname + "/views/index.html")
})


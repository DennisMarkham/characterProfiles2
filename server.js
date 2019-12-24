var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Non-handlebars version
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//****************

//handlebars version
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//*****************

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var characters = [
{
name: "Twilight Sparkle",
style: "body {background-color: purple; font-color: black;},",
type: "unicorn/alicorn",
likes: "books, academics"
image:"https://vignette.wikia.nocookie.net/fictionalfighters/images/d/d6/Mordecai-1.png/revision/latest?cb=20150524181704"
}, 
{name: "Rarity",
style: "body {font-color: navy-blue;}",
species: "unicorn",
likes: "fashion, high society"
image:"https://vignette.wikia.nocookie.net/theregularshow/images/d/dd/Rigby.png/revision/latest?cb=20190612191840"
}
];

//I would like to make this go to an index instead, but maybe the index can be constructed
//based on the characters that are in characters, like each character can have a "link" attribute
//and "name" attribute.
app.get("/", function(req, res){

  res.render("all", { all: characters });
})


app.get("/:characters?", function(req, res) {
  var chosen = req.params.characters;

  //how about a standardize function.  Standardize removes capitals, removes spaces, and removes
  //underscores
  function standardize(input)
  {
  	input = input.toLowerCase();

  	//supposed to remove vowels and spaces
  	input = str.replace(/[\s_]/g, '');
  	return input;
  }

  if (chosen)
{
	//so this goes through all the characters and checks if there's a match.  If there is,
	//it renders the character its currenly on.  I need to modify this to also remove spaces
  for (var i = 0; i < characters.length; i++) {
      if (stardardize(chosen) === standardize(characters[i].name)) {
         
        return res.render("pony", characters[i]);
      }
    }
}
//*************
});
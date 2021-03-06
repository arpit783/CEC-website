const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const multer = require("multer");

let posts = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

var storage = multer.diskStorage(
    {
        destination: './public/images',
        filename: function ( req, file, cb ) {
            //req.body is empty...
            //How could I get the new_file_name property sent from client here?
            cb( null, posts.length +".jpg");
        }
    }
);
var upload = multer({ storage: storage });
app.use(express.static("public"));



app.get("/", function(req, res){
  res.render("index", {
    posts: posts
  });
});

app.get("/Aboutus", function(req, res){
  res.render("Aboutus");
});

app.get("/Projects", function(req, res){
  res.render("Projects");
});

app.get("/Activities", function(req, res){
  res.render("Activities");
});

app.get("/SmartCities", function(req, res){
  res.render("SmartCities");
});

app.get("/ConcreteProject", function(req, res){
  res.render("ConcreteProject");
});

app.get("/GeosyntheticsProject", function(req, res){
  res.render("GeosyntheticsProject");
});

app.get("/BambooHousing", function(req, res){
  res.render("BambooHousing");
});

app.get("/Blogs", function(req, res){
  res.render("Blogs", {
    posts: posts
    });
});

app.get("/team", function(req, res){
  res.render("team");
});

app.get("/edifice", function(req, res){
  res.render("edifice");
});

app.get("/SportsFiesta", function(req, res){
  res.render("SportsFiesta");
});

app.get("/StructuralSaturday", function(req, res){
  res.render("StructuralSaturday");
});

app.get("/Farewell", function(req, res){
  res.render("Farewell");
});

app.get("/Freshers", function(req, res){
  res.render("Freshers");
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", upload.single('avatar'), function(req, res, next){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
    photoName: posts.length,
    link: req.body.postLink
  };

  posts.push(post);

  res.redirect("/blogs");

});


app.listen(3000, function(){
  console.log("server started on port 3000");
});

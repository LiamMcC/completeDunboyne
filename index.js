var express = require("express"); // call express to be used by the application.
var app = express();
var Club = require("./club.js");
var Player = require("./player.js");
var Fan = require("./fan.js");
var fanComments = require("./fanComments.json");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// set the template engine 
app.set('view engine', 'ejs'); 



app.use(express.static("views")); // allow the application to access the views folder contents to use in the application
// If you have images, styles etc code you need to replicate this code and change the bit in the brackets
// function to set up a simple hello response 


// function to render the home page
app.get('/', function(req, res){
    var theClub = new Club("Liam FC", "On A Pitch Somewhere");
    var clubData = theClub.display()
  res.render('home.ejs', {clubData});
  console.log(clubData);
});


// function to render the player page
app.get('/player', function(req, res){
    var thePlayer = new Player("Liam FC", "Liam McCabe", 22);
    var playerData = thePlayer.playerData()
  res.render('player.ejs', {playerData});
  console.log(playerData);
});

// function to render the player transfer page calling a static method
app.get('/static', function(req, res){
    
    var transferFee = Player.transferFee()
  res.render('player.ejs', {transferFee});
  console.log(playerData);
});


// function to render the new fan form page calling a static method
app.get('/newfan', function(req, res){
  
  res.render('newFan.ejs');
  
});


// app.post('/newFan', function(req, res){
//    Player.transferFee()
//    var something = Fan.showFan(req.body.name, req.body.comment)
//    console.log(something)
//    res.render('pagex.ejs', {something});
    
//   });



  app.post("/newFan", function(req,res){
    // this next code calls opens the file we want to write to
 var x = new Fan(req.body.name, req.body.comment).createFanComment()
        
           
             // this is where you send teh user when its done
     res.redirect('/') ;
    
});




app.get('/comments', function(req,res){
  res.render("allcomments.ejs", {fanComments}); // Get the contacts page when somebody visits the /contacts url
  console.log("I found the contacts page");
  
});

















// We need to set the requirements for teh application to run

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("App is Running ......... Yessssssssssssss!")
});



 // var clubData = new Club("Liam FC", "On A Pitch Somewhere").display()
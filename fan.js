'use strict';
var fs = require('fs')
module.exports = class Fan {

  constructor(name, comment){
    this.name=name;
    this.comment = comment


  }

  static showFan(a, b) {
       var xxx = a + " " + b
       return xxx
   }


   createFanComment(){
var fanComments = require("./fanComments.json");

 // these next lines make a new xomment based on the text box inputs
 var newComment = {
                    name: this.name,
                    Comment: this.comment

                  }

             // this next line creates a cunction to write back to the file we opened    
             fs.readFile('fanComments.json', 'utf8',  function readfileCallback(err){
              // this if statement looks for an error if there is one 
              if(err) {
                  throw(err)
                  
              } else {
                  // these next lines of code send the new comment back to the file we opened above
                fanComments.push(newComment); // add the new data to the JSON file
                var json = JSON.stringify(fanComments, null, 4); // this line structures the JSON so it is easy on the eye
                  fs.writeFile('fanComments.json',json, 'utf8', function(){})
                  
              }
              
      
            });
      

   }
  
  }




 
            
             


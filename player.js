'use strict';
var Club = require("./club.js");
module.exports = class Player extends Club {
   constructor(clubName, name, age) {
       super(clubName);
       this.name = name;
       this.age = age;
   }

   playerData() {
       return "the Club Name : " + this.clubName + " has a new player called " + this.name + " who is " +this.age;
   }

  static transferFee(){
    var fee = 3000
    return fee
   }

  
}
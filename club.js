'use strict';

module.exports = class Club {
   constructor(clubName, clubAddress) {
       this.clubName = clubName;
       this.clubAddress = clubAddress;
   }

   display() {
       var clubDetails = this.clubName + " " + this.clubAddress;
       return clubDetails
   }

  
}
function shout(string){
    return string.toUpperCase();
}
function whisper(string){

    return string.toLowerCase()
}
function logShout(string){


    console.log(string.toUpperCase());
    
}
function logWhisper(string){

console.log(string.toLowerCase())

}
function sayHiToHeadphonedRoommate(string){

var cantHear="I can\'t hear you!";
var hearYou="YES INDEED!";
var loveYou="I would love to!";

  if (string.toLowerCase(string) === string) {
    return cantHear;
  }
  else if (string.toUpperCase(string) === string) {
    return hearYou;
  }
  else if ("Let\'s have dinner together!" === string) {
    return loveYou
  }


}
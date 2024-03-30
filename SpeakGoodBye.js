 (function(window){
   var byeSpeaker = {};
   byeSpeaker.speakWord = "Good Bye";


// See Lecture 52, part 2
   byeSpeaker.speak = function (name) {
    console.log(byeSpeaker.speakWord + " " + name);
  }
  window.byeSpeaker =byeSpeaker;
})(window);
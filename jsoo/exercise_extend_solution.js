/* From the first exercise */
function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
}

Video.prototype.watch = function() {
    console.log("You watched all " + this.seconds + " seconds of " + this.title);
};

function MusicVideo(title, uploader, seconds, artist) {
    Video.call(this, title, uploader, seconds);
    this.artist = artist;
}

MusicVideo.prototype = Object.create(Video.prototype);

// A new method on this object
MusicVideo.prototype.rockOut = function() {
  console.log("You rocked out to " + this.artist + "!");
};

// Instantiating a new object
var musicVid = new MusicVideo("La Bamba", "Pamela", 250, "Ritchie Valens");
musicVid.rockOut();
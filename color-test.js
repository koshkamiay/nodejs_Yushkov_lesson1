var colorModule = require("colors");
console.log("Все получилось".green);

var ansi = require("ansi");
var cursor = ansi(process.stdout);
cursor.beep();

var player = require('play-sound-v12')(opts = {})
player.play('foo.mp3')

var beer = require('beer-names')
beer.random();

var makeBeep = require('make-beep');
makeBeep(1);
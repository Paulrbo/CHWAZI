const Discord = require('discord.js');
  fs = require("fs"),
  path = require("path");

let images = [];

const directoryPath = path.join(__dirname, "cat");
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  images = files;
});

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready !')
    client.user.setActivity("!chwazi element1 element2 element3");
});

client.on('message', (message) => {
    
    function randompic(min, max) {
    return (randnumpic = Math.floor(Math.random() * (max - min + 1)) + min);
  }

  if (message.content === "!motivation") {
    const path = `cat/${images[randompic(0, images.length)]}`;
    message.reply("tiens, un poti chat de motivation :", {
      files: [path],
    });
  }
    
    var myArray = [''];
    var tailleArray;

    
    if (message.content.split(" ")[0] === `!chwazi`) {
        myArray = message.content.split(" ");
        tailleArray = myArray.push(myArray);
        myArray.splice(0, 1);
    }
    
    function random(min, max) {
        min = Math.ceil(0);
        max = Math.floor(tailleArray-1);
        randnum = Math.floor(Math.random() * (max - min +1)) + min;
        console.log(myArray[randnum]);
        message.reply(myArray[randnum]);
      }
        random(0, tailleArray);
});
client.login(process.env.TOKEN);

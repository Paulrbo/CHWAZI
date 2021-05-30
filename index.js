const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready !')
    client.user.setActivity("!chwazi element1 element2 element3");
});

client.on('message', (message) => {
    var myArray = [''];
    var tailleArray;
    
    //console.log(tailleArray);
    
    /*if (message.content.startsWith("!chwazi ")){
        var tailleArray = myArray.push();
        myNewArray = myData.split(' '); 
    }*/
    
    if (message.content.split(" ")[0] === `c`) {
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

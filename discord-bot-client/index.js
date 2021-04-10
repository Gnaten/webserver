const Discord = require('discord.js');
const client = new Discord.Client();

// const io = require('socket.io-client');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

client.once('ready', () => {
    console.log('GnatenAI is Online~');
});

client.login('ummm');

const prefix = "!";                                                                 //Sets what character indicates the start of a command
client.on('message', message => {    
    console.log(`${message.author.username}:  ${message.content}`);                 //Logs Messages in Chat

    var args = message.content.slice(prefix.length).trim().split(' ');              //Sets up arguments (stuff after the command)
    const command = args.shift().toLowerCase();                                     //Corrects command to ALWAYS be LOWERCASE
    
    const extract = message.content.match(/\d+/g);                                  //Extracts number as string
    const amount = parseInt(extract);                                               //Converts to number
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;          //If 'command' does not start with '!' or Bot says something, return false
    
    else if (command === 'p') {                                                                                         //If 'command' is 'p', then execute
        if (!args.length) {                                                                                             //If no arguments is added after command, execute
            return message.channel.send(`Please enter a number (in millis)!`);
        }
        
        if (isNaN(amount)) message.channel.send(`"${args}" is not a number. Re-enter number (in millis)!`);             //If 'amount' variable is a NaN(Not a Number), then execute
        else if (typeof amount === "number") {                                                                          //If 'amount' variable identifies as a number, then execute
            if (amount <= 20000 && amount > 0) {
                xhr.open('POST', `http://192.168.1.46:3000/onFor/${amount}`);                                           //Sets up a POST response to Webserver
                xhr.send();                                                                                             //Sends POST response
                message.channel.send(`${message.author}\n\nLED on for ${amount} milliseconds`);                
            } else message.channel.send('Number too high! Re-enter number (in millis)!');

        }
            
    }
});


//Reference:
        // console.log(`Original:  ${message.content}`);
        // console.log(`slice(prefix.length):  ${message.content.slice(prefix.length)}`);              //Removes 1 character
        // console.log(`trim():  ${message.content.slice(prefix.length).trim()}`);                     //Removes whitespace in the front & back
        // console.log(`split():  ${message.content.slice(prefix.length).trim().split(' ')}\n\n`);     //Removes spaces by replacing them w/ nothing
    
        // console.log(`shift(): ${args.shift()}`);                                                    //Removes the first array
        // // console.log(`toLowerCase(): ${args.shift().toLowerCase()}\n\n`);                            //Turns all characters to lowercase
    
        // console.log(`typeof args: ${typeof parseInt(args)}`);                                       //Defines variable type of 'args'
        // console.log(`typeof command: ${typeof command}`);                                           //Defined variable type of 'command'

const Discord = require('discord.js')
const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NjkxMzc2MTQ0MDM2OTIxNDI0.XnfEgQ.UdRsKMCP-GflEe7jmQtY8uJgbLw';

const PREFIX = '!';

var version = 'v1.0.8'

bot.on('ready', () =>{
    console.log('Ready!');
    bot.user.setActivity('@tvillsupply', {type: 'WATCHING'}).catch(console.error);
})

bot.on('message' , message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'hi':
            message.channel.send('deez nuts')
            break;
        case 'info':
            message.channel.send(version)
            break;
        case 'clear':
        if(!args[1]) return message.reply('need the number of messages you want to clear')
            message.channel.bulkDelete(args[1]);
            break;
        case 'whoami':
            const embed = new Discord.MessageEmbed()
            .setTitle('info')
            .addField('name', message.author.tag)
            .addField('user id', message.author.id)
            .setThumbnail(message.author.displayAvatarURL())
            .setColor(0x0AF18C)
            .addField('tvillAIO version', version)
            .setFooter('tvillAIO')
            .setTimestamp()
            message.channel.send(embed);
            break;
        case 'baby':
            const Attachment = new('https://i1.wp.com/ytimg.googleusercontent.com/vi/ya2Yogv0pMk/mqdefault.jpg')    
            message.channel.send(message.author, attachment);
            break;
        case 'alexhat':
            const attachment2 = new('./alexhat.jpg');
            message.channel.send(message.author, attachment2)
            break;

    }
})



client.login(process.env.token);

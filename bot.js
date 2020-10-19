var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
//logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
	
	
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == 'p') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ing':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
			break
            case 'ong':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ping!'
                });
            break;

			
			
			
		}
     }
	 
	 if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'yawn':
				setTimeout(() => {bot.sendMessage({
                    to: channelID,
                    message: '*zzz'
                });}, 12000);                
			break
			case 'zzz':
				setTimeout(() => {bot.sendMessage({
                    to: channelID,
                    message: '*yawn'
                });}, 12000);                
			break;
			
			
		}
	 }
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'Areseven':
                bot.sendMessage({
                    to: channelID,
                    message: ''
                });
			break
            case 'suf':
                bot.sendMessage({
                    to: channelID,
                    message: 'sufs ID is 521430346282041356'
                });
            break
			case 'tony':
                bot.sendMessage({
                    to: channelID,
                    message: 'Our lord and saviours ID is 650349705330688012'
                });
			break
			case 'rank':
                bot.sendMessage({
                    to: channelID,
                    message: 'we all know that you are a noob, no matter what MEE6 has to say'
                });
			break
			case 'Mee6':
                bot.sendMessage({
                    to: channelID,
                    message: 'go away MEE6 - there isnt room for the two of us'
                });
			break
			case 'mona2':
                bot.sendMessage({
                    to: channelID,
                    message: 'English language, Music, Biology, Physics, History'
                });
			break
			case 'tuea2':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, Art, English, Geography, RE'
                });
			break
			case 'weda2':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, English, Math, Geography, Choice subject'
                });
			break
			case 'thua2':
                bot.sendMessage({
                    to: channelID,
                    message: 'Chemistry, History, DT, Math, PE'
                });
			break
			case 'fria2':
                bot.sendMessage({
                    to: channelID,
                    message: 'Math, Latin, German, Games, Games'
                });
			break
			case 'monb2':
                bot.sendMessage({
                    to: channelID,
                    message: 'PSHE, German, Music, English, History'
                });
			break
			case 'tueb2':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, Art, English, RE, Physics'
                });
			break
			case 'wedb2':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, Math, Biology, Choice subject, English'
                });
			break
			case 'thub2':
                bot.sendMessage({
                    to: channelID,
                    message: 'PE, Chemistry, Choice subject, Math, DT'
                });
			break
			case 'frib2':
                bot.sendMessage({
                    to: channelID,
                    message: 'Math, Latin, Geography, Games, Games'
                });
			break
			case 'mona3':
                bot.sendMessage({
                    to: channelID,
                    message: 'English language, DT, Biology, Physics, History'
                });
			break
			case 'tuea3':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, Music, English, Geography, RE'
                });
			break
			case 'weda3':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, English, Math, Geography, Choice subject'
                });
			break
			case 'thua3':
                bot.sendMessage({
                    to: channelID,
                    message: 'Chemistry, History, Art, Math, PE'
                });
			break
			case 'fria3':
                bot.sendMessage({
                    to: channelID,
                    message: 'Math, Latin, German, Games, Games'
                });
			break
			case 'monb3':
                bot.sendMessage({
                    to: channelID,
                    message: 'PSHE, German, DT, English, History'
                });
			break
			case 'tueb3':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, Music, English, RE, Physics'
                });
			break
			case 'wedb3':
                bot.sendMessage({
                    to: channelID,
                    message: 'German, Math, Biology, Choice subject, English'
                });
			break
			case 'thub3':
                bot.sendMessage({
                    to: channelID,
                    message: 'PE, Chemistry, Choice subject, Math, Art'
                });
			break
			case 'frib3':
                bot.sendMessage({
                    to: channelID,
                    message: 'Math, Latin, Geography, Games, Games'
                });
			break;
			
           

			
			
			
		}
     }

    if (message.substring(0, 1) == 'h') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
			case 'ewwo':
                bot.sendMessage({
                    to: channelID,
                    message: 'godammit i found you! .. AreSeven! .. wait you arent AreSeven?'
                });
			break
			case 'ewwo.':
                bot.sendMessage({
                    to: channelID,
                    message: 'godammit i found you! .. AreSeven! Our battle shall be legendary'
                });
			break
			case 'owdy':
                bot.sendMessage({
                    to: channelID,
                    message: 'Aye, howdy pardner'
                });
			break
			case 'eya':
                bot.sendMessage({
                    to: channelID,
                    message: 'hey, good to see you'
                });
			break;
 
			
			
			
		}
     } 

    
});
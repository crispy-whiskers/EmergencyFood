let Discord = require('discord.js')
let data = require('./data.json')
const bot = new Discord.Client();

bot.on('ready', async () => {
    await bot.user.setStatus('online');
    await bot.user.setActivity({
        name: 'you die in Spiral Abyss',
        type: 'WATCHING',
    });
});

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

bot.on('message', (message) => {
    let today = days[new Date().getDay()]
    switch (message.content) {
        case '!today':
            let embed = new Discord.MessageEmbed()
            embed.setAuthor('EmergencyFood', bot.user.avatarURL())
            embed.setTitle('Materials on rotation for ' + today)
            embed.addField(`Character talent materials at ${data.talents.mondstadt.domain} and ${data.talents.liyue.domain} :`, '\nMondstadt: ' + data.talents.mondstadt.schedule[today.toLowerCase()].join(', ')
                + '\nLiyue: ' + data.talents.liyue.schedule[today.toLowerCase()].join(', ')

                , true)
            message.channel.send(embed)
            break;
    }

})
bot.login(process.env.btoken);

const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 



client.login(process.env.NjI1MDcwNTg2MTkxOTM3NTc2.XYaVvA.9qC1D_eT3hqN2DCwC1fE8YK_rDM);

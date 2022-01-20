const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, 'ImprovMod has connected!')
});

client.on('message', (channel, user, message, self) => {
    if(self) return;

 
    if(message == '!GIE' || '!gie')  {
        client.say(channel, 'Thanks for checking us out! If you want to know more about us head over to https://gobsimprovemporium.com/ !');
    }
});

client.on('disconnected', () => {
    client.say(channel, "ImprovMod has disconnected!")
});


const { ActivityType, Client, Collection, GatewayIntentBits } = require("discord.js")
const { botToken } = require("./config.json")
const fs = require("fs")

const isDev = process.env.NODE_ENV === "development"


// client configuration
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
        //...
    ]
})

/*
// DisTube configuration
const DisTube = require("distube").default
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")

bot.distube = new DisTube(bot, {
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
    leaveOnEmpty: true,
    emptyCooldown: 0,
    leaveOnStop: false,
    savePreviousSongs: true
})

bot.distube.on("error", (channel, error) => {
    console.log(`DisTube error: ${error}`)
    channel.send({ content: `Errore: ${error}` })
})

bot.distube.on("playSong", (queue, song) => {
    queue.textChannel.send({ content: `In riproduzione: **${song.name}**` })
})

bot.distube.on("addSong", (queue, song) => {

    const getQueue = bot.distube.getQueue(queue)

    if (getQueue.autoplay || getQueue.songs.length > 1) {
        queue.textChannel.send({ content: `Aggiunta alla coda: **${song.name}**` })
    }
})

bot.distube.on("searchNoResult", (interaction) => {
    interaction.send("Brano non trovato")
})
*/

// files handling
bot.commands = new Collection()

const slashCommandsFolder = fs.readdirSync("./commands/slash_commands")

for (const folder of slashCommandsFolder) {
    const slashCommandsFiles = fs.readdirSync(`./commands/slash_commands/${folder}`).filter(file => file.endsWith(".js"))

    for (const file of slashCommandsFiles) {
        const slashCommand = require(`./commands/slash_commands/${folder}/${file}`)

        bot.commands.set(slashCommand.name, slashCommand)
    }
}


// client starting function
bot.once("ready", async () => {

    console.log(isDev ? "Operativo! (dev)" : "Operativo!")

    if (isDev) {

        // show dev alert
        bot.user.setActivity({
            type: ActivityType.Custom, // empty
            name: "In sviluppo... (non usare)"
        })

    } else {

        // show client latency
        setInterval(function latency() {

            bot.user.setActivity({
                type: ActivityType.Custom, // empty
                name: `Ping: ${bot.ws.ping == -1 ? "..." : bot.ws.ping} ms`
            })

            return latency

        }(), 10000);
    }


    bot.guilds.cache.forEach(guild => {
        guild.commands.set(bot.commands.map(c => c.data))

        //guild.commands.set([])   // clear commands list
    })
})


// client interactions listener
bot.on("interactionCreate", async (interaction) => {

    if (interaction.isCommand()) {

        const command = bot.commands.get(interaction.commandName)

        command.execute(interaction, bot)
    }
})


// client messages listener
const messageReaction = require("./commands/message_commands/react")

bot.on("messageCreate", async (message) => {

    if (!message.author.bot) {
        messageReaction.execute(message)
    }
})


// client login
bot.login(botToken)

const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {

    name: "play",
    data: {
        name: "play",
        description: "Riproduci un brano musicale",
        options: [
            {
                name: "brano",
                description: "Scegli il brano da riprodurre (anche con un link)",
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },

    execute(interaction, bot) {

        const userChannel = interaction.member.voice
        const botChannel = interaction.client.voice

        if (!userChannel.channel) {
            return interaction.reply({ content: "ERRORE: entra prima in un canale vocale", ephemeral: true })
        }

        if (botChannel.channel && userChannel.channelId != botChannel.channelId) {
            return interaction.reply({ content: "ERRORE: occupato in un altro canale vocale", ephemeral: true })
        }

        const song = interaction.options.getString("brano")

        interaction.reply({ content: "Cercando..." })

        bot.distube.play(userChannel.channel, song, {
            member: interaction.member,
            textChannel: interaction.channel
        })
    }
}
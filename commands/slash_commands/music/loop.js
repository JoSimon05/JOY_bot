
module.exports = {

    name: "loop",
    data: {
        name: "loop",
        description: "Riproduci lo stesso brano in loop"
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

        const queue = bot.distube.getQueue(interaction)

        if (!queue) {
            return interaction.reply({ content: "ERRORE: nessun brano in riproduzione", ephemeral: true })
        }

        if (queue.repeatMode == 0) {
            bot.distube.setRepeatMode(interaction, 1)
            interaction.reply({ content: "Modalità loop ON" })

        } else {
            bot.distube.setRepeatMode(interaction, 0)
            interaction.reply({ content: "Modalità loop OFF" })
        }
    }
}
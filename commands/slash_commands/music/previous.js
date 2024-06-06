
module.exports = {

    name: "previous",
    data: {
        name: "previous",
        description: "Riascolta il brano precedente"
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

        if (queue.previousSongs.length) {
            bot.distube.previous(interaction)
            interaction.reply({ content: "Brano precedente..." })

        } else {
            return interaction.reply({ content: "ERRORE: nessun brano nella cronologia", ephemeral: true })
        }
    }
}
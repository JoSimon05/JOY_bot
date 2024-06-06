
module.exports = {

    name: "stop",
    data: {
        name: "stop",
        description: "Annulla la riproduzione"
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

        try {
            bot.distube.stop(interaction)

        } catch {
            return interaction.reply({ content: "ERRORE: nessun brano in riproduzione", ephemeral: true })
        }

        interaction.reply({ content: "Riproduzione stoppata" })
    }
}
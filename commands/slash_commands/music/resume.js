
module.exports = {

    name: "resume",
    data: {
        name: "resume",
        description: "Riprendi la riproduzione"
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
            bot.distube.resume(interaction)

        } catch {
            return interaction.reply({ content: "ERRORE: brano già in riproduzione (o nessun brano in riproduzione)", ephemeral: true })
        }

        interaction.reply({ content: "Brano nuovamente in riproduzione" })
    }
}
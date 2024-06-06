
module.exports = {

    name: "leave",
    data: {
        name: "leave",
        description: "Disconnetti dal canale vocale"
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

        bot.distube.voices.leave(interaction)
        interaction.reply({ content: "Disconnesso" })
    }
}
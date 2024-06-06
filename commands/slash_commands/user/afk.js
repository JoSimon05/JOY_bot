
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {

    name: "afk",
    data: {
        name: "afk",
        description: "Comunica il motivo della tua assenza",
        options: [
            {
                name: "stato",
                description: "Scrivi il messaggio di AFK (max. 30 caratteri)",
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },

    execute(interaction) {

        const member = interaction.member
        const status = interaction.options.getString("stato")

        if (status.length > 30) {
            return interaction.reply({ content: "ERRORE: massimo 30 caratteri", ephemeral: true })
        }

        member.setNickname(`(${status})`)
        interaction.reply({ content: "Stato AFK impostato", ephemeral: true })

        setTimeout(() => interaction.deleteReply(), 3000)
    }
}

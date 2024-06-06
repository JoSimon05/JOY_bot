
const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {

    name: "clear",
    data: {
        name: "clear",
        description: "Elimina più messaggi insieme",
        options: [
            {
                name: "messaggi",
                description: "Scegli quanti messaggi eliminare",
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },

    execute(interaction) {

        if (!interaction.member.permissions.has("MANAGE_MESSAGES")) {
            return interaction.reply({ content: "ERRORE: non hai il permesso di eliminare i messaggi", ephemeral: true })
        }

        const messages = interaction.options.getNumber("messaggi")

        if (messages > 100) {
            return interaction.reply({ content: "ERRORE: massimo 100 messaggi alla volta", ephemeral: true })
        }

        let count1
        let count2

        if (messages == 1) {
            count1 = "io"
            count2 = "o"

        } else {
            count1 = "i"
            count2 = "i"
        }

        interaction.channel.bulkDelete(messages).then(() => {

            interaction.reply({ content: `${messages} messagg${count1} eliminat${count2}`, ephemeral: true })

            setTimeout(() => interaction.deleteReply(), 3000)

        }).catch(error => console.log(error))
    }
}
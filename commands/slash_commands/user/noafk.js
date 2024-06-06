
const { membersList } = require("../../../members.json")

module.exports = {

    name: "noafk",
    data: {
        name: "noafk",
        description: "Reimposta il nickname dopo l'assenza",
    },

    execute(interaction) {

        const member = interaction.member

        const memberByID = membersList.find(m => m.id == member.user.id)

        member.setNickname(memberByID.nick)
        interaction.reply({ content: `Nickname reimpostato su ${memberByID.nick}`, ephemeral: true })

        setTimeout(() => interaction.deleteReply(), 3000)
    }
}


const { ApplicationCommandOptionType } = require("discord.js")
const { RandomOrgClient } = require("@randomorg/core")
const { randomApiKey } = require("../../../config.json")

module.exports = {

    name: "roll",
    data: {
        name: "roll",
        description: "Tira un dado",
        options: [
            {
                name: "dado",
                description: "Scegli il valore del dado",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    { name: "d4", value: 4 },
                    { name: "d6", value: 6 },
                    { name: "d8", value: 8 },
                    { name: "d10", value: 10 },
                    { name: "d12", value: 12 },
                    { name: "d20", value: 20 },
                    { name: "d100", value: 100 }
                ],
                required: true
            }
        ]
    },

    execute(interaction) {

        const dice = interaction.options.getNumber("dado")

        const randomorg = new RandomOrgClient(randomApiKey)

        randomorg.generateIntegers(1, 1, dice).then(trueRandom => {

            let result

            if (trueRandom == dice) {
                result = `# ${trueRandom}`

            } else {
                result = `## ${trueRandom}`
            }

            interaction.reply({ content: result.toString() })

        }).catch(fakeRandom => {

            fakeRandom = Math.floor(Math.random() * dice) + 1

            let result

            if (fakeRandom == dice) {
                result = `# ${fakeRandom} *`

            } else {
                result = `## ${fakeRandom} *`
            }

            interaction.reply({ content: result.toString() })
        })
    }
}
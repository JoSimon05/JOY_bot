
module.exports = {

    execute(message) {

        const cleanMessage = message.content.trim().toLowerCase()

        switch (cleanMessage) {

            case "ahah":
            case "ahaha":
            case "ahahah":
            case "ahahaha":
            case "haha":
            case "hahah":
            case "hahaha":
            case "hahahah":
                message.react("😂")
                break

            case "asp":
            case "aspe":
            case "aspetta":
            case "wait":
                message.react("✋")
                break

            case "auguri":
            case "augurii":
            case "auguriii":
            case "auguriiii":
            case "auguriiiii":
                message.react("🎉")
                break

            case "bedwars":
                message.react(":broccolo:1229869802693197885")
                break

            case "bene":
            case "bene bene":
            case "benissimo":
                message.react("📈")
                break

            case "boh":
            case "bho":
            case "bo":
            case "idk":
                message.react("🤷‍♂️")
                break

            case "bravo":
            case "brava":
            case "brav":
            case "complimenti":
                message.react("👏")
                break

            case "ci sta":
                message.react(":ok_bro:1204068071333953569")
                break

            case "ciao":
            case "ciau":
            case "hello":
            case "helo":
            case "hola":
                message.react("👋")
                break

            case "cosa":
            case "cos":
            case "what":
            case "??":
            case "???":
                message.react("❓")
                break

            case "eheh":
            case "ehehe":
            case "eheheh":
            case "ehehehe":
            case "hehe":
            case "heheh":
            case "hehehe":
            case "heheheh":
                message.react(":eheheh:1204067545410306118")
                break

            case "ew":
            case "eww":
            case "ewww":
                message.react("🤢")
                break

            case "fail":
                message.react("🫣")
                break

            case "gay":
                message.react("🏳️‍🌈")
                break

            case "gg":
                message.react("💪")
                break

            case "grazie":
            case "grazie mille":
            case "thanks":
            case "thank you":
            case "thank u":
                message.react("🙏")
                break

            case "idea":
                message.react("💡")
                break

            case "lol":
                message.react("") //TODO
                break

            case "male":
            case "male male":
            case "malissimo":
                message.react("📉")
                break

            case "mh":
            case "mhh":
            case "mhhh":
            case "mhhhh":
            case "mm":
            case "mmm":
            case "mmmm":
            case "mmmmm":
            case "mmh":
            case "mmmh":
            case "mmmmh":
                message.react("🤔")
                break

            case "no":
            case "nop":
            case "nah":
            case "na":
            case "naa":
                message.react("👎")
                break

            case "noia":
                message.react("🥱")
                break

            case "non va il mic":
            case "non mi va il mic":
            case "non va il microfono":
            case "non mi va il microfono":
                message.react(":hey:1204067690952654899")
                break

            case "ok":
            case "oke":
            case "okay":
            case "okok":
                message.react("👌")
                break

            case "ops":
            case "ups":
                message.react("😅")
                break

            case "ou":
            case "ouu":
            case "ouuu":
                message.react("🤌")
                break

            case "raga":
            case "rega":
            case "ragazzi":
                message.react("📢")
                break

            case "ragiz":
            case "ragizz":
            case "ragizzz":
            case "ragizzzz":
            case "ragizzzzz":
            case "ragizzzzzz":
            case "ragizzzzzzz":
            case "ragizzzzzzzz":
                message.react("🐻")
                break

            case "scemo":
            case "scema":
            case "popipopi":
            case "popi popi":
                message.react("🤡")
                break

            case "scusa":
            case "scus":
            case "sorry":
                message.react("🥺")
                break

            case "sexy":
            case "smash":
                message.react("🫦")
                break

            case "si":
            case "yes":
            case "yess":
            case "yep":
                message.react("👍")
                break

            case "suca":
                message.react(":tu_mica_sei_la_mafia:1204093098590994462")
                break

            case "top":
            case "topp":
            case "toppp":
                message.react("🔝")
                break

            case "wow":
            case "uau":
                message.react("😯")
                break

            case "wtf":
                message.react("😱")
                break

            case "...":
            case "....":
            case "....":
                message.react("😶")
                break

/*
            case "":
                message.react("")
                break
*/
        }
    }
}

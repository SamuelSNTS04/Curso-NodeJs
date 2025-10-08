import prompt from "prompt";
import { mainPrompt } from "./prompts/prompt-main.js";

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        if (result.select == 1) {
            console.log("Escolheu o QRCODE")
        } else if (result.select == 2) {
            console.log("Escolheu o PASSWORD")
        }
    })

    prompt.start();
}

main();
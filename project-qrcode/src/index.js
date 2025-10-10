import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQrCode from "./services/qr-code/create.js";
import createPasword from "./services/password/create.js";

async function main() {
    prompt.get(promptSchemaMain, async (err, result) => {
        if (result.select == 1) {
            await createQrCode();
        } else if (result.select == 2) {
            await createPasword();
        }
    })

    prompt.start();
}

main();
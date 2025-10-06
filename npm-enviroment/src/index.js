import connectToDatabase from "../database/data.js";

async function main() {
    await connectToDatabase(process.env.userdatabase, process.env.passworddatabase)    
}

main();
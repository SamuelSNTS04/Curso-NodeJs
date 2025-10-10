async function permittedCharacters() {
    let permitted = [];

    if (process.env.uppercase_letters === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.lowercase_letters === "true") {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.numbers === "true") {
        permitted.push(..."0123456789");
    }

    if (process.env.special_characters === "true") {
        permitted.push(..."!@#$%^&*()-_");
    }

    return permitted;
}

export default permittedCharacters;
const databaseType = {
    userType: "admin",
    typeData: "datalocal"
};

async function connectToDatabase(dataName) {
    console.log(`conectado ao banco ${dataName}`);
}

async function disconnectToDatabase() {
    console.log('desconectando ao banco de dados')
}
export { connectToDatabase, disconnectToDatabase, databaseType };
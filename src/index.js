const player1 = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    points: 0
};

const player2 = {
    name: "Peach",
    speed: 3,
    maneuverability: 4,
    power: 2,
    points: 0
};

const player3 = {
    name: "Yoshi",
    speed: 2,
    maneuverability: 4,
    power: 3,
    points: 0
};

const player4 = {
    name: "Bowser",
    speed: 5,
    maneuverability: 2,
    power: 5,
    points: 0
};

const player5 = {
    name: "Luigi",
    speed: 4,
    maneuverability: 4,
    power: 4,
    points: 0
};

const player6 = {
    name: "Donkey Kong",
    speed: 2,
    maneuverability: 2,
    power: 5,
    points: 0
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "STRAIGHT";
            break;
        case random < 0.66:
            result = "CURVE";
            break;
        default:
            result = "CONFROTATION";
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolled a die of ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`🏁 Round ${i}`);

        // sortearBloco
        let block = await getRandomBlock();
        console.log(`Block: ${block}`);

        // rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "STRAIGHT") {
            totalTestSkill1 = diceResult1 + character1.speed;
            totalTestSkill2 = diceResult2 + character2.speed;

            await logRollResult(character1.name, "speed", diceResult1, character1.speed);
            await logRollResult(character2.name, "speed", diceResult2, character2.speed);
        }
        if (block === "CURVE") {
            totalTestSkill1 = diceResult1 + character1.maneuverability;
            totalTestSkill2 = diceResult2 + character2.maneuverability;

            await logRollResult(character1.name, "maneuverability", diceResult1, character1.maneuverability);
            await logRollResult(character2.name, "maneuverability", diceResult2, character2.maneuverability);
        }
        if (block === "CONFROTATION") {
            let powerResult1 = diceResult1 + character1.power;
            let powerResult2 = diceResult2 + character2.power;

            console.log(`${character1.name} confronts ${character2.name}`);

            await logRollResult(character1.name, "power", diceResult1, character1.power);
            await logRollResult(character2.name, "power", diceResult2, character2.power);

            if (powerResult1 > powerResult2 && character2.points > 0) {
                console.log(`${character1.name} won the confrontation! ${character2.name} lost the confrontation`);
                character2.points--;
            }

            if (powerResult2 > powerResult1 && character1.points > 0) {
                console.log(`${character2.name} won the confrontation! ${character1.name} lost the confrontation`);
                character1.points--;
            }

            if (powerResult1 === powerResult2){
                console.log("Tied confrontation! No points were lost.");
            }
                
        }

        // verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.name} scored a point!`);
            character1.points++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.name} scored a point!`);
            character2.points++;
        }
    }
}

async function declareWinner(character1, character2) {
    console.log("\nFINAL RESULT:");
    console.log(`${character1.name}: ${character1.points} point(s)`);
    console.log(`${character2.name}: ${character2.points} point(s)`);

    if(character1.points > character2.points){
        console.log(`\n${character1.name} won the race! Congratulation!`);
    } else if(character2.points > character1.points) {
        console.log(`\n${character2.name} won the race! Congratulation!`);
    } else {
        console.log(`\nThe race ended in a draw`);
    }
}

(async function main() {
    console.log(`🏁🚨 Race between ${player1.name} and ${player2.name} starting...`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
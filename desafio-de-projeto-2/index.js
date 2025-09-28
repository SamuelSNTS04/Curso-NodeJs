let vitorias = 101;
let derrotas = 0;
let nivel;

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

resultadoDoSaldo = calcularSaldo(vitorias,derrotas);

switch (true) {
    case vitorias <= 10:
        nivel = 'Ferro';
        break;

    case vitorias >= 11 && vitorias <= 20:
        nivel = 'Bronze';
        break;

    case vitorias >= 21 && vitorias <= 50:
        nivel = 'Prata';
        break;

    case vitorias >= 51 && vitorias <= 80:
        nivel = 'Ouro';
        break;

    case vitorias >= 81 && vitorias <= 90:
        nivel = 'Diamante';
        break;

    case vitorias >= 91 && vitorias <= 100:
        nivel = 'Lendário';
        break;

    case vitorias >= 101:
        nivel = 'Imortal';
        break;
}

console.log(`O Herói tem de saldo de ${resultadoDoSaldo} está no nível de ${nivel}`);

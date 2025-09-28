let vitorias = 101;
let derrotas = 0;
let nivel;

function saldoVitorias(vitorias, derrotas) {
    const somatorio = vitorias - derrotas;
    return somatorio;
}

switch (true) {
    case saldoVitorias(vitorias, derrotas) < 10:
        nivel = 'Ferro';
        break;

    case saldoVitorias(vitorias, derrotas) >= 11 && saldoVitorias(vitorias, derrotas) <= 20:
        nivel = 'Bronze';
        break;

    case saldoVitorias(vitorias, derrotas) >= 21 && saldoVitorias(vitorias, derrotas) <= 50:
        nivel = 'Prata';
        break;

    case saldoVitorias(vitorias, derrotas) >= 51 && saldoVitorias(vitorias, derrotas) <= 80:
        nivel = 'Ouro';
        break;

    case saldoVitorias(vitorias, derrotas) >= 81 && saldoVitorias(vitorias, derrotas) <= 90:
        nivel = 'Diamante';
        break;

    case saldoVitorias(vitorias, derrotas) >= 91 && saldoVitorias(vitorias, derrotas) <= 100:
        nivel = 'Lendário';
        break;

    case saldoVitorias(vitorias, derrotas) >= 101:
        nivel = 'Imortal';
        break;
}

console.log(`O Herói tem de saldo de ${saldoVitorias(vitorias, derrotas)} está no nível de ${nivel}`);



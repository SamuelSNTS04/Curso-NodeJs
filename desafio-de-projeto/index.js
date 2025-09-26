let nome = 'Samuel';
let quantidadeDeExperiencia = 2000;
let nivel;

if (quantidadeDeExperiencia < 1000) {
    nivel = 'Ferro';
} else if (quantidadeDeExperiencia >= 1001 || quantidadeDeExperiencia <= 2000) {
    nivel = 'Bronze';
} else if (quantidadeDeExperiencia >= 2001 || quantidadeDeExperiencia <= 5000) {
    nivel = 'Prata';
} else if (quantidadeDeExperiencia >= 5001 || quantidadeDeExperiencia <= 7000) {
    nivel = 'Ouro';
} else if (quantidadeDeExperiencia >= 7001 || quantidadeDeExperiencia <= 8000) {
    nivel = 'Platina';
} else if (quantidadeDeExperiencia >= 8001 || quantidadeDeExperiencia <= 9000) {
    nivel = 'Ascendente';
} else if (quantidadeDeExperiencia >= 9001 || quantidadeDeExperiencia <= 10000) {
    nivel = 'Imortal';
} else if (quantidadeDeExperiencia >= 10001) {
    nivel = 'Radiante';
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
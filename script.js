//Desafio Alura: "Formatar o valor resultante no formato "1.000.000,00", para facilitar a leitura."
//Desafio pessoal: aceitar valores com "." e escritos como mil.milhão, etc.


function conversor() {
    let valor = prompt("Digite um valor em Wons");
    let umWon = 0.0040;

    // Converte texto escrito p numero
    valor = converterTextoParaNumero(valor);

    if (isNaN(valor)) {
        alert("Valor inválido! Tente novamente.");
        return;
    }

    let resultado = valor * umWon;

    // Formata p R$x,xx
    alert("R$ " + resultado.toLocaleString("pt-BR", { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 }));
}

function converterTextoParaNumero(texto) {
    if (!texto) return NaN;  // Se o user não digitou nada ou "", retona NaN
    
    // Remove espaços extras e converte p minúsculas
    texto = texto.trim().toLowerCase();

    // Dicionário de valores por extenso
    let numerosExtenso = {
        "mil": 1000,
        "milhao": 1000000,
        "milhão": 1000000,
        "bilhao": 1000000000,
        "bilhão": 1000000000,
        "trilhao": 1000000000000,
        "trilhão": 1000000000000
    };

    // SE texto for um número direto, tenta converter
    if (!isNaN(texto.replace(",", "."))) { //subst virgula por ponto
        return parseFloat(texto.replace(",", "."));
    }

    for (let [palavra, valor] of Object.entries(numerosExtenso)) {   //percorre o dicionario
        if (texto.includes(palavra)) {                               //converte
            let numeroBase = parseFloat(texto.replace(palavra, "").trim().replace(",", ".")); //remove a palavra e deixa o numero base
            return isNaN(numeroBase) ? valor : numeroBase * valor; //se Nbase for real multiplica pelo valor correspondente
        }
    }

    return NaN; //se nenhuma conversao for possivel
}




/* function conversor() {
    valor = prompt("Digite um valor em Wons")
    umwon = 0.0040;
    alert("R$" + valor * umwon)  
} */ 
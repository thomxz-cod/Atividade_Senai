//  importando a biblioteca para ler oq o usuario escreve!
import readline from "readline-sync";

let estoque = parseInt(readline.question("Informe a quantidade de doces no estoque: "));

while (true) {
    console.log("\n1 - Chegada de doces(ENTRADA)");
    console.log("\n1 - Vendas de doces(SAIDA)");

    let operacao = parseInt(readline.question("\nInforme o tipo de operação: "))
    
    if (operacao !== 1 && operacao !== 2) {
        console.log("Operação invalida, tente novamente!");
        continue; 
    }
    
    let quantidade = parseInt(readline.question("\nInforme a quantidade de doces: "));
    
    if (isNaN(quantidade) || quantidade <= 0 ) {
        console.log("Quantidade invalida, tente novamente!");
        continue;
    }

    if (operacao === 1) {
        estoque += quantidade;
    } else if ( quantidade > estoque){
        console.log("Saldo insulficiente!");
    } else {
        estoque -= quantidade
    }

    console.log(`Saldo atualizado para ${estoque} doces`)

    let continuar = String(readline.question("Deseja continuar? (s/n): ").toLowerCase());
    
    if (continuar !== "s") {
        console.log("Sistema encerrado!!");
        break;
    }
}

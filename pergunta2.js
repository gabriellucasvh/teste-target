function contarLetraA(str) {
    
    const regex = /a/gi; // 'g' para encontrar todas as ocorrências, 'i' para ignorar maiúsculas/minúsculas
    const ocorrencias = str.match(regex);
    // Retorna a quantidade de ocorrências ou 0 se nenhuma ocorrência for encontrada
    return ocorrencias ? ocorrencias.length : 0;
  }

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite uma string para verificar a letra "a": ', (resposta) => {
    const quantidade = contarLetraA(resposta);
    console.log(`A letra 'a' (maiúscula ou minúscula) aparece ${quantidade} vez(es) na string.`);
    
    rl.close();
  });
  
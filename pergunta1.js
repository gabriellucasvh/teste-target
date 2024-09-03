function fibonacci(n) {
    const sequencia = [0, 1]; // Começa com os dois primeiros números da sequência
    // Continua gerando a sequência até o próximo número ser maior que n
    while (true) {
      const proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
      if (proximo > n) break;
      sequencia.push(proximo);
    }
    return sequencia;
  }
  function verificarFibonacci(num) {
    const sequencia = fibonacci(num);
    return sequencia.includes(num);
  }

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Informe um número: ', (resposta) => {
    const num = parseInt(resposta, 10); // Converte a resposta para um número inteiro
    if (isNaN(num)) {
      console.log('Número inválido. Por favor, insira um número válido.');
    } else {
      // Verifica se o número pertence à sequência de Fibonacci e exibe o resultado
      const resultado = verificarFibonacci(num);
      console.log(resultado ? `${num} pertence à sequência de Fibonacci.` : `${num} não pertence à sequência de Fibonacci.`);
    }
  
    rl.close();
  });
  
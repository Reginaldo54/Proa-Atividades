const fs = require('fs');

let nomeArquivo = "arquivo.txt";
let conteudo = "\nSim, eu num já te disse? Tu é surdo?";
// Leitura do arquivo
fs.readFile(nomeArquivo, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
  
    console.log('Conteúdo do arquivo:', data);
  
    // Agora, você pode realizar outras operações com o conteúdo do arquivo
  
    // Fechando o arquivo (não é estritamente necessário, pois o Node.js gerencia isso automaticamente)
    fs.closeSync(fs.openSync(nomeArquivo, 'r'));
  });

// Teste de uso de arquivos

// importando biblioteca
const fs = require('fs');

let nomeArquivo = "arquivo.txt";

let conteudo = "\nSim, e você?";

// Leitura do arquivo
fs.readFile(nomeArquivo, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
    
    //Mostrando o contéudo  
    console.log('Conteúdo do arquivo:', data);
  
    // Fechando o arquivo (não é estritamente necessário, pois o Node.js gerencia isso automaticamente)
    fs.closeSync(fs.openSync(nomeArquivo, 'r'));
  });

// Passos

// 1 - Usar a biblioteca mysql2 (guardar numa variável)

// 2 - Conectar o banco de dados (usar a variável que guardou a biblioteca para criar uma conexão com o banco de dados)
// é necessário passar o host, user, password e o database que vou tá usando.

// 3 - Fazer o que eu quiser ao utilizar o método query('Passa em string o comando mysql', [passa os dados aqui, de acordo com a posição decidida], (varDeError, VarDeResulta) => {
    // if(varDeError) console.error(varDeError);     
    // console.log(results);
//}) 

// usar a variável que guardou a conexão para... fechar a conexão

// A operação de acessar um banco de dados... parece com a operação de abrir e fechar um arquivo...


// Requerimento de biblioteca feito
const getMysqlBiblioteca = require('mysql2');

// Conexão criada - Passada as configurações
const connection = getMysqlBiblioteca.createConnection(
    {
        host: '127.0.0.1',
        user: 'root' ,
        password: 'Proa@2022',
        database: 'db'

    }
) 

// Abrir conexão com o banco
connection.connect((err) => {
    if(err) console.error("A conexão não foi aberta", err);
    
    console.log("Conexão aberta com sucesso.");
});
/*

let queryDropTable = 'drop table aluno';
connection.query(queryDropTable, (err, result) => {
    if(err) console.error(err);

    console.log("Tabela dropada com sucesso");
})

*/

const valores = [
    [7, 'Jessica 2Tabaca', 21],
    [8, 'Juregue2', 22],
    [9, 'Cavalo2', 23],
    [10, 'jumento2', 25]
  ];
  
  
  const query = 'INSERT INTO aluno (id, nome, idade) VALUES ?';
  
  connection.query(query, [valores], (err, results) => {
    if (err) {
      console.error('Erro:', err);
    }
  
    console.log('Resultados:', results);
  });


  connection.query('select * from aluno;', (err, result) => {
    if(err)
    {
        console.error("error: ", err);
    }

    console.log("Resultado: ", result);
})

// Fechando conexão
connection.end();


function Chamar()
{
    alert("Minha Tabela: " + estudantes.toString);
}
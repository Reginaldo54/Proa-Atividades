

let estudantesCadastrados = [];
            
function Estudante(nome, idade, matricula)
{
    this.Nome      = nome;
    this.Idade     = idade;
    this.Matricula = matricula;
}


const aluno1 = new Estudante("Reginaldo Alves", 21, "24.24.24");
const aluno2 = new Estudante("Raphaela Pereira", 24, "23.23.22");


estudantesCadastrados.push(aluno1);
estudantesCadastrados.push(aluno2);

IniciandoPrograma();

function IniciandoPrograma()
{
    // Condição de saida do laço de repetição
    while(user_input !== 4)
    {
        
        // Recebendo input do usuário
         var user_input = parseInt(prompt("Cadastro de Usuário: \n\n 1 - Cadastrar Estudante \n 2 - Pesquisar Estudante \n 3 - Listar Estudantes \n 4 - Finalizar e Mostrar Estudantes")); 
        
        // Opções
        switch(user_input)
        {
            case 1:
                CadastrarEstudante();
            break;
            
            case 2:
                PesquisarEstudante();
            break;
            
            case 3:
                ListarEstudante();
            break;
            
            case 4:
                alert("Finalizando o programa....\n Mostrando os estudantes cadastrados");
                    ListarEstudante();
            break;

            // Caso nenhuma opção anterior...
            default:
                if(isNaN(user_input))
                {
                    user_input = 4;
                    alert("Finalizando o programa....");
                    continue;
                }
                alert("Insira Um número que se relacione as opções dadas.");
                continue;
                break;
        }
    }
    
}


//#region Funções do Programa
    
    function VerificandoInputsAntesCasdrastro()
    {
        // Por enquanto Verificar se o valor é vázio aqui. Onde cadastro.
        const nome = SetName();

        if(nome == null)
        {
            return null;
        }   

        const idade = SetIdade();
        
        if(idade == null)
        {
            return null;
        }

        const matricula = SetMatricula();
        
        if(matricula == null)
        {
            return null;
        }
        
        return [nome, idade, matricula];
    }     

    function CadastrarEstudante()
    {
        // Deve receber os dados: Nome Idade e Matricula dentro de array
        let inputsVerificados = VerificandoInputsAntesCasdrastro();

        // Verificando tem algo dentro do array passado.
        if(inputsVerificados != null)
        {
            // Inserindo Informações
            const estudante = new Estudante(inputsVerificados[0], inputsVerificados[1], inputsVerificados[2]);
            
            // Guardando o aluno na lista
            estudantesCadastrados.push(estudante);  
        }
        else
        {
            alert("Cadastro cancelado.");
        }
    }

    
    function PesquisarEstudante(nome)
    {
        
        let formato = /^[1-4]$/;

        while(!(formato.test(inputOption)))
        {
            var inputOption = prompt("Escolha o tipo de pesquisa: \n\n 1 - Pesquisa por nome\n 2 - Pesquisa por idade \n 3 - Pesquisa por matricula\n 4 - Cancelar Pesquisa");
            
            if(inputOption == null)
            {
                inputOption = 4;
            }

            if(isNaN(inputOption))
            {
                alert("Não insira letras, mas sim números!");
            }
                
            switch(parseInt(inputOption))
            {
                case 1:
                    // Pesquisar por Nome, Sobrenome, Nome Sobrenome (includes)
                    PesquisarNome();    
                break;
                    
                case 2:
                    // Pesquisar por idade
                    PesquisarIdade();
                break;

                case 3:
                    // Pesquisar por Matricula.
                    PesquisarMatricula();
                break;
            
                case 4:
                    alert("Pesquisa cancelada");
                    return null;
                break;

                default:
                    if(!isNaN(inputOption))
                    {
                        alert("Insira um valor de 1 até 4");
                    }
                break;
            }       
        }
                       

    }

        
    function ListarEstudante()
    {
        // Posição do aluno
        let pos = 0;
        let info = "";
        // Passando pela lista e Pegando os elementos dela
        for( const estudante of estudantesCadastrados)
        {
            // Guardando as informações do estudante
             info += `\n\nEstudante ${pos + 1}`; 

            // Passando pelas informações do objeto do estudante
            for (const dado in estudante) 
            {
                // Registrando as info do estudante
                info +=  `\n${dado}: ${estudante[dado]}`;
            }

            // Mostrando todas as informações de uma vez
            
            // Aumentando a posição em 1 (para o proximo estudante.)
            pos++;
        }

        alert(info)
            
    }

//#endregion

//#region Funções que decidem a qualidade do input de dados do estudante pelo usuário. 
    
    function SetName()
    {
        let input = prompt("Insira Nome:");
        
        let formato = /^[A-Z][a-z]+\s[A-Z][a-z]+$/
        if(input == null)
        {
            return null;
        }
        // Enquanto o formato não estiver certo
        while(!formato.test(input))
        {
            // Continue testando
            
            input = prompt("Insira Nome no formato Nome Sobrenome:");
            
            if(input == null)
            {
                return alert("Cancelando Cadastramento...");
            }
        }

        return input;    
    }

    function SetIdade()
    {
        let input = parseInt(prompt("Insira Idade:"));
        
        // Checando se o valor no input não é inteiro.
        while(!Number.isInteger(input) || input <= 0 || input > 100)
        {
            if(isNaN(input))
            {
                return null; 
            }
            // Input foi menor ou igual a 0
            else if(input <= 0)
            {
                input = parseInt(prompt("Insira um valor maior que 0 para a idade:"));
            }

            // O input foi maior que 100
            else if(input > 100)
            {
                input = parseInt(prompt("Insira um valor menor que 100 ou igual a 100 para a idade:"));
            }
            // O input não é inteiro...
            else if(!Number.isInteger(input))
            {       
                // Pedir valor, até inserir a idade com númemros
                input = parseInt(prompt("Insira um valor inteiro na Idade:"));
            }

        }

        return input;
    }

    function MatriculaFormato()
    {
        
        let input = prompt("Insira Matricula: ");
        if(input == null)
        {
            return null;
        }
        const formato = /^\d{2}\.\d{2}\.\d{2}$/

        // Enquanto o formato digitado pelo usuário estiver errado, peça para digitar novamente.
        while(!formato.test(input))
        {   
            input = prompt("Insira Matricula no formato xx.xx.xx onde x é um número: ");
            if(input == null)
            {
                return alert("Cancelando Cadastramento...");
            }
        }
        return input;
    }

    function SetMatricula()
    {
        let input = MatriculaFormato();
            
        if(input != null)
        {
            // Não pode registrar...
            while(!podeRegistrar)
            {
                var podeRegistrar = PodeRegistrarMatricula(input);
                // Pode registrar a matricula
                if(podeRegistrar)
                {
                    alert("Matricula Registrada");
                    return input;
                }
                // Não pode registrar
                else
                {
                    // Caso não achar
                    alert("A matricula já cadastrada, Tente insirir outra");
                    continue;   
                }
            }
        }
    }

    function PodeRegistrarMatricula(input)
    {
        // Passando pelo array
        for(let i = 0; i < estudantesCadastrados.length; i++)
        {
            // Verificando se a matricula do objeto correponde ao input

            // Verificando se a matricula existe já
            if(estudantesCadastrados[i].Matricula === input)
            {
                // Não Pode cadastrar.
                return false;
            }
        }

        // Pode cadastrar, pq não tem mais nenhuma
        return true; 

    }

//#endregion

//#region Funções auxiliares da funcionalidade de Pesquisa

    // AINDA NÃO FOI COMPLETO
    function PesquisarNome()
    {
        let inputNome = prompt("Insira o nome que deseja pesquisar:");
        
        if(inputNome != null)
        {
            let objeto = ProcurarNome(inputNome.toLowerCase());

            MostrarObjetoEstudante(objeto);
        }
        else
        {
            
            alert("Pesquisa cancelada");
        }
    }


    function PesquisarIdade() 
    {
        const inputIdade = SetIdade();
        
        if(inputIdade != undefined)
        {
            const obj = ProcurarIdade(inputIdade);
            MostrarObjetoEstudante(obj);
        }
        else
        {
            
            alert("Pesquisa cancelada");
        }
    }

    function PesquisarMatricula()
    {
        const inputMatricula = prompt("Insira a matricula ( formato - 00.00.00):");
        
        if(inputMatricula != null)
        {
            const obj = ProcurarMatricula(inputMatricula);

            MostrarObjetoEstudante(obj);
        }
        else
        {
            
            alert("Pesquisa cancelada");
        } 
    }
//#endregion

//#region Funções auxiliares de proocura de dados 
    function ProcurarMatricula(inputMatricula)
    {
        let estudantesAchados = [];
        let pos = 0;

        for(let i = 0; i < estudantesCadastrados.length; i++)
        {
            // Funciona apenas para um obj. Se for mais de um, preciso de um array...
            if(estudantesCadastrados[i].Matricula.includes(inputMatricula))
            {
                estudantesAchados[pos] = estudantesCadastrados[i];
                pos++;
            }
        }

        return estudantesAchados.length === 0 ? alert("A matricula não foi encontrada") : estudantesAchados;
    }

    function ProcurarNome(inputNome)
    {
        let estudantesAchados = [];
        let pos = 0;
        
        for(let i = 0; i < estudantesCadastrados.length; i++)
        {
            //estudantesCadastrados[i].Nome // Preciso os mesmos caracteres usados na criação da key para tentar achar
            
            let nomeObjeto = estudantesCadastrados[i].Nome.toLowerCase();

            if(nomeObjeto.includes(inputNome))
            {
                // Retornando o objeto que possui o nome. (Vai retornar o primeiro valor encontrado e ignorar o resto.)
                estudantesAchados[pos] = estudantesCadastrados[i];
                pos++;
        
            }

        }

        return estudantesAchados.length === 0 ? alert("O nome não foi encontrado.") : estudantesAchados;
    }

    function ProcurarIdade(inputIdade)
    {
        let estudantesAchados = [];
        let pos = 0;
        
        for(let i = 0; i < estudantesCadastrados.length; i++)
        {
            if(estudantesCadastrados[i].Idade === inputIdade)
            {
                // Retorne o Objeto.
                estudantesAchados[pos] = estudantesCadastrados[i];
                pos++;
        
            }
        }
        // Se eu for fazer esse print da mensagem no html, 
        // vou ter que criar uma função e ent fazer as funções de procura ativar ela sempre que n encontrar algo.
        return estudantesAchados.length === 0 ? alert(`A idade não foi encontrada.`) : estudantesAchados;
    }

//#endregion


function MostrarObjetoEstudante(obj)
{
    
    if(!(obj == null))
    {
        let info = "";
        for(let i = 0; i < obj.length; i++)
        {
            info += "\n\nEstudante Encontrado:";
            
            for (const key in obj[i]) 
            {
                info += `\n${key}: ${obj[i][key]}`;  
            }
        }

        return alert(info);
    }
    
}


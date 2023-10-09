import React, { useState } from 'react';

    function LoginForm()
    {
        const [nomeUsuario, setnomeUsuario] = useState('');
        const [senhaUsuario, setSenhaUsuario] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        
        const usuarios = ['usuario', 'user', 'alguma', 'photo'];
        const senhas = ['senha123', 'pass', 'coisa', 'shop'];

        const user = 0;
        const pass = 1;
        const login = [usuarios, senhas];

        function manipulaLogin()
        {
            let acessou = false;
            for(let i = 0; i < login.length; i++)
            {
                // Vai verificar se o usuário e senha são os mesmos que os que estão no array.

                if (login[user][i] === nomeUsuario && login[pass][i] === senhaUsuario)
                {
                    acessou = true;
                    window.location.href = '/bemvindo';
                    alert("Entrando...");
                } 
                
            }

            if(acessou === false)
            {
                // Só vai rodar se o usuário ou senha estiverem incorretos.
                setErrorMessage('Nome de usuário ou senha incorretos.');
            }
          
        }

        return (
        <body>
            <main>
                <div className="login-container">
                <h2>Instagrão</h2>
                    <hr/>
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={nomeUsuario}
                    onChange={(e) => setnomeUsuario(e.target.value)}
                    required
                /> 

                <br/>

                <input
                    type="password"
                    placeholder="Senha"
                    value={senhaUsuario}
                    onChange={(e) => setSenhaUsuario(e.target.value)}
                    required
                /> 
                
                <br/>

                <button onClick={manipulaLogin}>Entrar</button>
             

                <p style={{ color: 'red', fontSize: '1em'}}>{errorMessage}</p>

                </div>
            </main>
        </body>
            );
    }

    export default LoginForm;
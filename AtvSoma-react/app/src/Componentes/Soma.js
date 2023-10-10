import React from "react";

function Soma()
{
    function resultado() {
        
        // Recebendo inputs
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        

        // Se não tiver nenhum valor, atribua 0 a ele.
        if(isNaN(a))
        {
            a = 0;
        }

        if(isNaN(b))
        {
            b = 0;
        }

        // somando

        let soma = a + b

        // alterando valores.
        document.getElementById("soma").textContent = "Soma: " + soma;
    };

    return (
        <div>
            <label>Primerio valor: </label>
            <input type="number" id="a"/> <br/>
            <label>Segundo Valor: </label>
            <input type="number" id="b"/>
            <p id="soma"></p>
            <button onClick={resultado}>Obter Soma</button>

        </div>
    );
}

export default Soma;
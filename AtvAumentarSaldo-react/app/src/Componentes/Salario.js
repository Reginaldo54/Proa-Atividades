import React, {useState} from "react";

function Salario()
{

    const [salario, setSalario] = useState(0);

    function AumentaSalario()
    {
        setSalario(salario + 1);
    };

    return (
        <div className="content">
            <h1>Salário atual R$: {salario}</h1>

            <button onClick={AumentaSalario}>Aumentar</button>

        </div>
    );
}

export default Salario;
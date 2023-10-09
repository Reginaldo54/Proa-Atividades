import React from "react";

function Home()
{
    function IrLogin()
    {
        window.location.href = '/';
    }

    return(
        <body>
        <main>
            <div className="login-container" id="tocavel">
                <div >

                    <h2>Bemvindo!!</h2>
                    <hr/>
                    <h3> Ao projeto Instagrão 3.0</h3>

                </div>
            </div>
        </main>
    </body> 
    );
}

export default Home;
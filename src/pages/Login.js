import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="grid_login">
                <section className="login_head">
                    <h2>Login / Opret</h2>

                </section>
                <section className="login">

                    <form action="">

                        <input type="text" placeholder="Dit-Navn" />
                        <input type="text" placeholder="Din-Kode..." />
                        <button>Login</button>
                        
                    </form>

                </section>
                <section className="opret">

                    <form action="">

                        <input type="text" placeholder="Dit-Navn" />
                        <input type="text" placeholder="Din-Kode..." />
                        <input type="text" placeholder="Din-Email..." />
                        
                        <button>Opret en konto</button>
                    </form>

                </section>

            </div>
        </div>
    )
}

export default Login

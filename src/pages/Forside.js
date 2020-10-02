import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiDollarSign} from "react-icons/fi";

import '../scss_stuff/grid.scss'

import Sildeshow from '../pages/Sildeshow'
import Nyhedsbrev from '../pages/Nyhedsbrev'
import { hentAntalNyheder, hentAntalProdukter } from '../helpers/apikald'

const Forside = () => {



    const [regioner, setRegioner] = useState();
    const [produkter, setProdukter] = useState();
    

    useEffect(() => {

        hentAntalNyheder().then(response => setRegioner(response))
        hentAntalProdukter().then(response => setProdukter(response))

    }, [])



    let regionListe = <h1>Vent venlist .... indlæses</h1>

    if (regioner && regioner.length) {
        regionListe = regioner.map(r => (
            <div className="produkt_box">
                <img src={"http://localhost:5033/images/" + r.image} alt={r.titel} />
                <h2>{r.titel}</h2>
                <p>{r.teaser.substr(0, 130) + '...'}</p>


            </div>
        ))
    }

    ///////////////////

    let produktListe = <h1>Vent venlist .... indlæses</h1>

    if (produkter && produkter.length) {
        produktListe = produkter.map(r => (
            <div className="produkt_box">
                <img src={"http://localhost:5033/images/" + r.image} alt={r.titel} />
                <p> {r.pris}<FiDollarSign/> </p>
                <h2>{r.titel}</h2>
                <p>{r.teaser.substr(0, 130) + '...'}</p>
                <Link className="produkt_link" to={"/produkter/" + r._id}>SE MERE</Link>


            </div>
        ))
    }



    return (
        <div>

            <Sildeshow />
            <div className="forside_grid">
                <section className="forside_head">
                    <h2>Vi skaber lækkert! brød</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                    pariatur? Iure, inventore reprehenderit?
                    Quidem dicta quia modi alias esse quisquam odit ipsa reprehenderit
                    ducimus quibusdam rerum quam.
                     </p>
                </section>
                <section className="nyhed_grid">

                    <article>
                        {regionListe}
                    </article>
                </section>

            </div>
            <Nyhedsbrev />

            <div className="nyeste_bred">

                <section className="bred_head">
                    <h2>Vi skaber lækkert! brød</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                    pariatur? Iure, inventore reprehenderit?
                    Quidem dicta quia modi alias esse quisquam odit ipsa reprehenderit
                    ducimus quibusdam rerum quam.
                     </p>
                </section>

                <section className="bred_brodukt">
                    {produktListe}
                </section>

            </div>

        </div>
    )
}

export default Forside

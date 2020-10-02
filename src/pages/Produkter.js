import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import '../scss_stuff/produkter.scss'

import { hentAlleProdukter, hentAllekategorier } from '../helpers/apikald'

const Produkter = () => {


    const [events, setevents] = useState();
    const [regioner, setRegioner] = useState();

    const [valgtregion, setvalgtregion] = useState("5f63ba0b702cca37f87ce070");

    //useeffect
    useEffect(() => {

        hentAlleProdukter().then(response => setevents(response))
        hentAllekategorier().then(response => setRegioner(response))

    }, [])


    let regionListe = <h2>Vent venlist .... indlæses</h2>

    if (regioner && regioner.length) {
        regionListe = regioner.map(r => (
            <button  onClick={(e) => setvalgtregion(e.target.value)} key={r._id} value={r._id}  >{r.titel}</button>
        ))
    }



    let evenListe = <h2>"loading...."</h2>

    if (events && events.length) {

        evenListe = events.filter(e => {
            return (e.kategori._id === valgtregion || valgtregion === "alle")


        })

            .map(e => (

                <div className="produkt_box" key={e._id}>
                    <img src={"http://localhost:5033/images/" + e.image} alt={e.titel} />
                    <h2> {e.titel} </h2>
                    <p>{e.teaser.substr(0, 120) + '...'}</p>
                    <Link className="produkt_link" to={"/produkter/" + e._id}>SE MERE</Link>
                </div>

            ))
    }



    return (

        <div className="grid_produkter">
            <section className="produkter_head">
                <h2>Vores elskede bageværk</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                pariatur? Iure, inventore reprehenderit?
                Quidem dicta quia modi alias esse quisquam odit ipsa reprehenderit
                ducimus quibusdam rerum quam, neque minima at?
                     </p>
            </section>
            <section className="produkter">
                <div className="bred">
                    {evenListe}
                </div>
            </section>
            <section className="produkte_kategorier">
                <div className="kategorier_container">
                    {regionListe}
                </div>
            </section>
        </div>
    )
}

export default Produkter

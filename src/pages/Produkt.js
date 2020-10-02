import React, { useState, useEffect } from 'react'
import { FiHeart } from "react-icons/fi";

import { hentProdukt, } from '../helpers/apikald'
import { FiChevronRight } from "react-icons/fi";


const Produkt = (props) => {

    const [produkt, setProdukt] = useState()
    const [ingrediens, setIngrediens] = useState([])

    useEffect(() => {

        hentProdukt(props.match.params.produktId).then(response => setProdukt(response))


    }, [])

    useEffect(() => {

        hentProdukt(props.match.params.produktId).then(response => setIngrediens(response))


    }, [])

    let produktinfo, head, head_info, ing, kun = "Loader..."
    if (produkt) {

        produktinfo = (

            <div className="produkt_top_info">
                <p className="light_text">Produkter <FiChevronRight /> </p>
                <p> {produkt.titel} </p>
            </div>

        )

        head = (

            <div>
                <h2> {produkt.titel} </h2>
                <p> {produkt.kategori.titel} </p>
            </div>

        )

        head_info = (

            <div>
                <img src={"http://localhost:5033/images/" + produkt.image} alt={produkt.titel} />
                <p> {produkt.beskrivelse} </p>
            </div>


        )


        ing = (

            produkt.ingredienser.map(e => ((
                <div>
                    <p> {e.maengde} {e.ingrediens_titel} {e.enhed_forkortet} </p>
                </div>
            ))

            )
        )

        kun = (

            produkt.kommentar.map(e => ((
                <div>
                    <p> {e.titel} </p>
                    <p> {e.kommentaren} </p>
                    <p> {e.bruger.brugernavn} </p>
                </div>
            ))

            )
        )

    }


    let ingredienser = "Loader..."
    if (ingrediens) {

        ingredienser = (


            <div>
                <li> [ingrediens:ingredienser]</li>
            </div>


        )

    }










    return (
        <div>
            <section className="produkt_titel">
                {produktinfo}

                <section className="produkt_head">
                    <div className="produkt_top_head">
                        {head}
                    </div>
                    <div className="button_container">
                        <button>LIKE! <FiHeart /> </button>
                    </div>
                </section>

                <section className="produkt_info">
                    <div className="grid_bred_info">
                        {head_info}
                    </div>
                    <div className="grid_bred_mereinfo">
                    <h2>hrll</h2>
                    {kun}
                    </div>
                    <div className="grid_bred_instrukser">

                    </div>
                    <div className="grid_bred_ingredienser">
                        <p>ingredienser</p>
                        {ing}
                    </div>
                </section>

            </section>


        </div>
    )
}

export default Produkt

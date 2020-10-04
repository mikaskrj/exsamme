import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'

import { FiHeart, FiMessageCircle } from "react-icons/fi";
import '../scss_stuff/kommentar.scss'

import { hentProdukt, } from '../helpers/apikald'
import { FiChevronRight } from "react-icons/fi";


const Produkt = (props) => {


    const [produkt, setProdukt] = useState()


    useEffect(() => {

        hentProdukt(props.match.params.produktId).then(response => setProdukt(response))

    }, [])


    let produktinfo, head, head_info, ing, kun, tal = "Loader..."
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
                <p> {parse(produkt.beskrivelse)} </p>
            </div>


        )


        ing = (

            produkt.ingredienser.map(e => ((
                <div className="ingrediens" key={e._id}>
                    <li>{e.maengde}{e.enhed_forkortet}.{e.ingrediens_titel} </li>
                </div>
            ))

            )
        )

        kun = (

            produkt.kommentar.map(e => ((
                <div className="kommentar_box" key={e._id}>

                    <h3> {e.bruger.brugernavn} </h3>
                    <p className="oprettet"> {e.oprettet} </p>
                    <p> {e.kommentaren} </p>

                </div>
            ))

            )
        )

        tal = (

            produkt.kommentar.map(k => ((
                <p key={k._id}> {k.rolle} </p>
            ))

            )
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
                        <button>LIKE! <p><FiHeart /> </p></button>
                    </div>
                </section>

                <section className="produkt_info">
                    <div className="grid_bred_info">
                        {head_info}
                    </div>


                    <div className="grid_bred_ingredienser">
                        <p>ingredienser</p>
                        {ing}
                    </div>
                </section>

            </section>
            <section className="grid_kommentar">

                <div className="kommentar_head">

                    <h4>kommentar</h4>
                    <div className="icon">
                        <FiMessageCircle />
                        {tal}
                    </div>

                </div>
                <div className="kommentar">
                    {kun}

                </div>


            </section>

        </div>
    )
}

export default Produkt

import React from 'react'
import { opretKontakt } from '../helpers/apikald'
import Goolemap from '../imgs/googlemap.JPG'

const Kontakt = () => {


    const handleSubmit = async (e) => {

        e.preventDefault();

        let besked = {

            "navn": e.target.navn.value,
            "email": e.target.email.value,
            "besked": e.target.besked.value,
            "emne": e.target.emne.value,

        }
        opretKontakt(besked).then(response => {

            console.log(response)


        })

        e.target.navn.value = ""
        e.target.email.value = ""
        e.target.besked.value = ""

    }






    return (
        <div className="grid_kontakt">
            <section className="kontakt_head">
                <h2>Kontakt os</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                pariatur? Iure, inventore reprehenderit?
                Quidem dicta quia modi alias esse quisquam odit ipsa reprehenderit
                ducimus quibusdam rerum quam, neque minima at?
                     </p>
            </section>
            <section className="kontakt_form">

                <form onSubmit={handleSubmit} >

                    <input name="navn" placeholder="Dit-Navn..." required /><br />

                    <input name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Din-Email..." required /><br />

                    <input name="emne" placeholder="Dit-Emne..." required /><br />

                    <textarea name="besked" placeholder="Din-Besked..." required /><br />

                    <button type="submit">Send</button>

                </form>

            </section>
            <section className="kontakt_addresse">
                <div className="add_text_container">
                    <p className="kontakt_boldttext">addresse:</p><p> Øster Uttrupvej 1 9200 aaborg</p>
                </div>
                <div className="add_text_container">
                    <p className="kontakt_boldttext">telefon</p><p>+45 25 26 95 40</p>
                </div>
                <img className="googleimg" src={Goolemap} alt="goole map" />
            </section>
        </div>
    )
}

export default Kontakt

import React, {useState} from 'react'
import {tilmeldNyhedBrev} from '../helpers/apikald'
import { FiMail} from "react-icons/fi";


const Nyhedsbrev = () => {


    const [tilmeldt, setTilmeldt] = useState(false)


    const handleSubmit = async (e) => {

        e.preventDefault();

        let tilmelding = {

            email: e.target.email.value

        }

        tilmeldNyhedBrev(tilmelding).then(response => console.log(response))


        setTilmeldt(true)

    }


    return (
        <section className="nyhedsbrev">


            {
                !tilmeldt ? (
                   <div className="form_container">
                     
                    <form onSubmit={handleSubmit}>
                    <h3>Tilmeld dig vores nyhedsbrev</h3>
                       <p>Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver </p>
                       <section>
                        <div className="mail_box"><FiMail/></div>
                        <input name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  placeholder="indtast din email..." required />
                        <button type="submit">Tilmeld</button>
                        </section>
                    </form>
                    </div>
                )
                    :
                    <h2 className="tilmeld_tak">tak for din tilmedlding</h2>
            }

        </section>
    )
}

export default Nyhedsbrev

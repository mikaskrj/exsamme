import React from 'react'
import '../scss_stuff/footer.scss'

const Footer = () => {
    return (
        <footer>

            <section className="footer_main">
                <h2>bageriet</h2>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum,
                men de fleste udgaver har gennemgået forandringer.
                        </p>
            </section>
            <section className="footer_sec">
                <p>Copyright © 2017 bageriet aps</p>
            </section>
        </footer>
    )
}

export default Footer

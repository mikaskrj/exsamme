const [regioner, setRegioner] = useState();

    useEffect(() => {

        hentAlleProdukter().then(response => setRegioner(response))

    }, [])



    let regionListe = <h1>Vent venlist .... indlæses</h1>

    if (regioner && regioner.length) {
        regionListe = regioner.map(r => (
            <div className="produkt_box">
            <img src={"http://localhost:5033/images/" + r.image} alt={r.titel}  />
            <h2>{r.titel}</h2>
            <p>{r.teaser.substr(0, 100) + '...'}</p>
            
            
            </div>
        ))
    }

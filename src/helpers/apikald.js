import axios from 'axios';


//base url
const api = {
    baseUrl: 'http://localhost:5033/'
}

///---------------------------------- EVENTS-----------


// get alle events

export const hentAntalProdukter = async () => {


    let response = await axios.get(api.baseUrl + "produkter/antal/" + "8")
    return response.data;


}


export const hentAntalNyheder = async () => {


    let response = await axios.get(api.baseUrl + "nyheder/antal/" + "3")
    return response.data;


}


export const hentAlleProdukter = async () => {


    let response = await axios.get(api.baseUrl + "produkter")
    return response.data;


}


// get ud fra id

export const hentProdukt = async (id) => {


    let response = await axios.get(api.baseUrl + "produkter/" + id)
    return response.data;


}

export const hentKategorier = async (id) => {


    let response = await axios.get(api.baseUrl + "kategorier/" + id)
    return response.data;


}


// get alle events ud fra Dato efter xxx-dato
export const hentAlleEventsDato = async (dato) => {

    let response = await axios.get(api.baseUrl + "event/soegdato?dato_fra=" + dato) // http://localhost:5021/event/soegdato?dato_fra=2020-12-21
    return response.data;

}

// Post opret nyt event
export const opretEvent = async (nytevent, billede) => {

    const formdata = new FormData();
    formdata.append("billede", billede);
    formdata.append("event", JSON.stringify(nytevent));
    console.log(formdata)
    let response = await axios.post(api.baseUrl + "event/admin", formdata) // http://localhost:5021/event/admin
    return response.data;

}

// Put / Ret et event
export const retEvent = async (id, event, billede) => {

    const formdata = new FormData();
    formdata.append("billede", billede);
    formdata.append("event", JSON.stringify(event));
    
    let response = await axios.put(api.baseUrl + "event/admin/" + id, formdata) // http://localhost:5021/event/admin/5f429f032012914a940e3d2b
    return response.data;

}

// Del slet ud fra id
export const sletEvent = async (id) => {


    let response = await axios.delete(api.baseUrl + "event/admin/" + id) // http://localhost:5021/event/admin/5f3fd1a77e525a19cce3b685
    return response.data;


}


/// event tilmeldning
export const EventEmailTilmelding = async (tilmel) => {


    let response = await axios.post(api.baseUrl + "eventtilmelding/", tilmel) //http://localhost:5021/eventtilmelding/
    return response.data;


}


///---------------------------------- regioner-----------


// get alle events ud dra region

export const hentAllekategorier = async () => {


    let response = await axios.get(api.baseUrl + "kategorier") //http://localhost:5033/kategorier
    return response.data;


}


///---------------------------------- sponsoer-----------

/// get alle sponsoer
export const hentAlleSponsorer = async () => {


    let response = await axios.get(api.baseUrl + "sponsor") //http://localhost:5021/sponsor
    return response.data;


}


///---------------------------------- bestyrelse-----------

/// get alle bestyrelse
export const hentAlleBestyrelse = async () => {


    let response = await axios.get(api.baseUrl + "bestyrelse") //http://localhost:5021/bestyrelse
    return response.data;


}


///---------------------------------- Kontakt-----------

/// Post Kontakt
export const opretKontakt = async (besked) => {


    let response = await axios.post(api.baseUrl + "kontakt", besked) //http://localhost:5021/kontakt/
    return response.data;


}

///---------------------------------- simpel søgning-----------
export const findEvent = async (ord) => {


    let response = await axios.get(api.baseUrl + "event/soeg/" + ord) //http://localhost:5021/event/soeg/
    return response.data;


}

///---------------------------------- brev tilmeldning-----------
export const tilmeldNyhedBrev = async (email) => {


    let response = await axios.post(api.baseUrl + "nyhedsbrevtilmelding/", email) //http://localhost:5033/nyhedsbrevtilmelding/
    return response.data;


}





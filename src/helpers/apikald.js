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

export const hentkategorier = async (id) => {


    let response = await axios.get(api.baseUrl + "kategorier/" + id)
    return response.data;


}


// get alle events ud fra Dato efter xxx-dato
export const hentAlleEventsDato = async (dato) => {

    let response = await axios.get(api.baseUrl + "event/soegdato?dato_fra=" + dato) // http://localhost:5021/event/soegdato?dato_fra=2020-12-21
    return response.data;

}








/// event tilmeldning
export const EventEmailTilmelding = async (tilmel) => {


    let response = await axios.post(api.baseUrl + "eventtilmelding/", tilmel) //http://localhost:5021/eventtilmelding/
    return response.data;


}




// get alle events ud dra region

export const hentAllekategorier = async () => {


    let response = await axios.get(api.baseUrl + "kategorier") //http://localhost:5033/kategorier
    return response.data;


}

///---------------------------------- brev tilmeldning-----------
export const tilmeldNyhedBrev = async (email) => {


    let response = await axios.post(api.baseUrl + "nyhedsbrevtilmelding/", email) //http://localhost:5033/nyhedsbrevtilmelding/
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






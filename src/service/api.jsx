import axios from 'axios';

const url = "https://covid19.mathdro.id/api/";


export const fetchapi = async () => {

    try {
        const data = await axios.get(url);
        return data;

    }
    catch (e) {
        console.log(e);
    }
}

export const fetchcountries = async () => {

    try {
        const { data: { countries } } = await axios.get(`${url}countries`);
        return countries.map(countrynames => countrynames.name)
    }
    catch (e) {
        console.log(e);
    }
}


export const fetchSelectedCountryData = async (selectedcountryname) => {

    let changedUrl = `${url}countries/${selectedcountryname}`;

    if (selectedcountryname === "" || selectedcountryname === "Global") {
        changedUrl = url;
    }

    try {
        const selectedcountrydata = await axios.get(changedUrl);
        return selectedcountrydata;
    }
    catch (e) {
        console.log(e);
    }
}


import { useEffect, useState } from 'react';
import { fetchcountries } from './service/api';


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';

const Countries = ({ handleCountryChange }) => {

    const [countrynames, setCountryNames] = useState([]);

    useEffect(() => {

        const fetchdatafromapi = async () => {
            console.log(fetchcountries());
            setCountryNames(await fetchcountries());
        }

        fetchdatafromapi();

    }, [])


    return (
        <Box className=" d-flex flex-column align-items-center justify-content-center my-3">
            <Typography className="px-3" color="textSecondary" variant="h5">Reported Cases/Deaths By Country Or Territory</Typography>
            <NativeSelect className="my-3 text-center" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="Global">Global</option>
                {
                    countrynames.map((country, i) => {
                        return (
                            <option key={i} value={country}>{country}</option>
                        )
                    })
                }
            </NativeSelect>
        </Box>

    )
}

export default Countries;
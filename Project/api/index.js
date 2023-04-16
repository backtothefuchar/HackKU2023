// Import the Axios library for making HTTP requests
import axios from "axios"

// Define a function that retrieves data from the Travel Advisor API
export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        // Use Axios to make a GET request to the API endpoint
        const {data : {data},} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                // Set the query parameters for the request
                params: {
                    bl_latitude: bl_lat ? bl_lat : '48.81556220872687',
                    tr_latitude: tr_lat ? tr_lat : '48.90214747577797',
                    bl_longitude: bl_lng ? bl_lng : '2.224219054341255',
                    tr_longitude: tr_lng ? tr_lng : '2.469850925555473',
                    limit: '30',
                    currency: 'USD',
                    lunit: 'mi',
                    lang: 'en_US'
                },
                // Set the headers for the request, including the API key and host
                headers: {
                    'X-RapidAPI-Key': '177a9055d8mshc886ef9c3a58d12p1ae50ejsncacb1914caa1',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
            }
        )
        // Return the data retrieved from the API
        return data
    } catch (error) {
        // If an error occurs, return null
        return null
    }
}

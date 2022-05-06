export const apiService = {
     getTranslate
};

const ENV_API_KEY = process.env.VUE_APP_RAPID_KEY;

const headers = {
    "x-rapidapi-host": "mashape-community-urban-dictionary",
    "x-rapidapi-key": ENV_API_KEY
}


 export function getTranslate (props: string) {
     return fetch(`https://api.urbandictionary.com/v0/define?term=${props}`, {
        "method": "GET",
        "headers": headers
    }).then(response => {
     return response.json();
    }).catch(err => {
        console.log(err);
    });
}

export const apiService = {
     getTranslate
};

const headers = {
    "x-rapidapi-host": "mashape-community-urban-dictionary",
    "x-rapidapi-key": "KB5e7ZbqyKmshXFLZRFguVieeyePp1BhDXPjsnvByN3nYiesPM"
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

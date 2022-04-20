export const apiService = {
    getTranslate
};
const headers = {
    "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "x-rapidapi-key": "KB5e7ZbqyKmshXFLZRFguVieeyePp1BhDXPjsnvByN3nYiesPM"
};
export function getTranslate(props) {
    return fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${props}`, {
        "method": "GET",
        "headers": headers
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
}
//# sourceMappingURL=api.service.js.map
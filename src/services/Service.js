

const ENDPOINT = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const createdCard = (datos) => {
    return fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}
    

export { createdCard };
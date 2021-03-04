//TODO: use dotenv for basedomain or so
var baseDomain = '';

//TODO: include query unique ID + application ID for validation in backend, also think of url length
// takes a message, base64 encodes it and uses it as subdomain for the request 
async function querier(msg) {
    fetch(atob(msg) + '.' + baseDomain)
        // theres no response to expect actually
        .then(response => response.json())
        .then(data => console.log(data));
}

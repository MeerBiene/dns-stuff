const c = require('@aero/centra');

//TODO: use dotenv for basedomain or so
const baseDomain = '';

//TODO: include query unique ID + application ID for validation in backend, also think of url length
// takes a message, base64 encodes it and uses it as subdomain for the request 
const querier = async (msg) => res = await c(btoa(msg) + '.' + baseDomain, 'GET').send();

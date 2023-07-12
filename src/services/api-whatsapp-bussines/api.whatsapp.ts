import axios from "axios";
//import { GATEWAY_URL } from 'constants/urls.constants'

const REGISTER_NUMBER = "102009772748819";
const API_TOKEN_WHATSAPP =
  "Bearer EAAHLzXTZBhBABAMmGZA9UK2TnzGuTZAj9cKZBmQcYt0heVutZBcq8isiWdZAUcWFtOk39ltZBbmVYkZBThDdhOsmuZB7nYU104G41sRXGVeaUqBwEOceksnj0zvFRwHOcPKsbR0ZBdRrgp0gcccF44DGU1AgPJOalpfZCWZCAxhjZBVKG60Kky20qb9kK1ofs5pSK0cRqDJBkDZCC1TAZDZD";

const apiWhatsappClient = axios.create({
  baseURL: `https://graph.facebook.com/v15.0/${REGISTER_NUMBER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `${API_TOKEN_WHATSAPP}`,
  },
});

export default apiWhatsappClient;

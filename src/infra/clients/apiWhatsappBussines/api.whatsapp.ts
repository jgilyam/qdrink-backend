import axios from "axios";
//import { GATEWAY_URL } from 'constants/urls.constants'

const REGISTER_NUMBER = "102009772748819";
const API_TOKEN_WHATSAPP =
  "Bearer EAAHLzXTZBhBABAOQ3SpicCIjfIIQwpxGyli3B5OBp2fegeCPNlNl9cCBgMozCWnMoeZA1X0jtwpsc7vk5rhPedZAmOq9ZA7n0ZCZBd6qPSG9QkZBdBa58ReYv0eZA1YWb1pKUvaYZCVzzMedNHR0x5H4U4QfaVLLtZA7XL39gOC8wKQtRGf1fXAgiQPoXwhFoEP8bWmRdk9pZCGIwZDZD";

const apiWhatsappClient = axios.create({
  baseURL: `https://graph.facebook.com/v15.0/${REGISTER_NUMBER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `${API_TOKEN_WHATSAPP}`,
  },
});

export default apiWhatsappClient;

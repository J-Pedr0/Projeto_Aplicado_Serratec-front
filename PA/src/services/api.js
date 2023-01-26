import axios from 'axios';

const api = axios.create({
    baseURL: "https://6391f97ab750c8d178d33d68.mockapi.io/"
    
});

export default api;
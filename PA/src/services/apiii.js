import axios from 'axios';

export const apiii = axios.create({
    baseURL: "http://localhost:8080/"

});

// export const createSession = async (email, password) => {
//     return apiii.post("/login", { username: email,password: password });
// };

// export const getAtivos = async () => {
//     return apiii.get("/api/ativo");
// };
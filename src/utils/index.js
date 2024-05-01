import axios from "axios"; // to call api

const serverUrl = "https://tawasol-server-8ea12eeff4fd.herokuapp.com/";

export const api = axios.create({
    baseURL: `${serverUrl}/api`,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["x-auth-token"] = token;
        localStorage.setItem("token", token);
    } else {
        delete api.defaults.headers.common["x-auth-token"]; // Issue here
        localStorage.removeItem("token");
    }
};

export const getProfileImage = userId =>(`${serverUrl}/images/${userId}`);


export const formatDate = date => {
    return new Intl.DateTimeFormat('en', {year: 'numeric', month: 'long'}).format(new Date(date));
} 

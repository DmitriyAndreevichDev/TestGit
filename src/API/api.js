import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://api.github.com`,
});


export const authAPI = {
    getUserLogin() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
};
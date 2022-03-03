import axios  from "axios";

export const reqResAPi = axios.create({
    baseURL:'https://reqres.in/api'
});
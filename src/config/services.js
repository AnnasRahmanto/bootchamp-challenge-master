import axios from "axios"
import { Token } from "./token"

export const fetchApi = (url, params) => {
    return axios.get(url, {
        params,
        headers: {
            Authorization: Token
        }
    })
}
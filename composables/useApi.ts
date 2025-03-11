import axios, { type AxiosInstance } from "axios"

export const useApi = (): AxiosInstance => {
    const baseURL = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/"

    return axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    })
}

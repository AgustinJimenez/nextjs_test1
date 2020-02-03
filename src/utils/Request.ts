import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const Request = async (options: AxiosRequestConfig) => {
    let response: AxiosResponse = await axios(options)
    return response.data
}

export default Request

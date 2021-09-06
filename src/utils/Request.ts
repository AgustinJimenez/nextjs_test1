//import fetch from 'isomorphic-unfetch'
import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from '../api'

const request = async (options: AxiosRequestConfig) => {
    //console.log('REQUEST-REQUEST ===> ', { options })
    let response = await axiosInstance.request(options)
    //console.log('REQUEST-RESPONSE ===> ', { response })
    if (response.status !== 200) return { error: true, data: null, message: response.statusText, response }
    return { error: false, data: response.data, message: response.statusText, response }
}

export default request

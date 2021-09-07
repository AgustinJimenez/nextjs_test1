import Axios from 'axios'
import env from '../../env.json'

export const axiosInstance = Axios.create({
    baseURL: env.api_domain,
    timeout: 2000,
    // headers: { 'X-Custom-Header': 'foobar' }
})

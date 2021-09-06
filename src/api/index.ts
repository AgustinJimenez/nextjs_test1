import Axios from 'axios'
import { api_domain } from '../../env.json'

export const axiosInstance = Axios.create({
    baseURL: api_domain,
    timeout: 2000,
    // headers: { 'X-Custom-Header': 'foobar' }
})

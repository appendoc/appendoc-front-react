import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const FALLBACK_BASE_URL = 'https://api-dev.appendoc.wiki'
const axiosConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_APP_API_BASE_URL || FALLBACK_BASE_URL
}

const apiClient: AxiosInstance = axios.create(axiosConfig);
export default apiClient

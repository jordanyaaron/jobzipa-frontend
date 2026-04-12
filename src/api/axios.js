import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_VERSION = import.meta.env.VITE_API_VERSION

const api = axios.create({
  baseURL: `${BASE_URL}${API_VERSION}`,
});


/* REQUEST INTERCEPTOR */
api.interceptors.request.use(
  (config) => {

    if (config.skipAuth) {
      return config
    }

    const token = localStorage.getItem("accessToken")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)



/* RESPONSE INTERCEPTOR */
api.interceptors.response.use(
  response => response,

  async error => {

    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true

      const refresh = localStorage.getItem("refresh")

      console.log(refresh)

      const res = await axios.post(
        `${BASE_URL}${API_VERSION}auth/tokens/refresh/`,
        { refresh }
      )

      

      const newAccess = res.data.access

      localStorage.setItem("accessToken", newAccess)

      api.defaults.headers.common["Authorization"] =
        `Bearer ${newAccess}`

      originalRequest.headers["Authorization"] =
        `Bearer ${newAccess}`

      return api(originalRequest)
    }

    return Promise.reject(error)
  }
)

export default api
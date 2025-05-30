/// <reference types="vite/client" />
import a from "axios";

a.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}/api`;
a.defaults.withCredentials = true;

a.interceptors.response.use((res) => {
  if (res.status === 401) {
    window.location.pathname = "/login";
  }
  return res;
});

const axios = a;

export default axios;

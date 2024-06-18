import api from "configs/api";
import {getCookie} from "utils/cookie";

const getProfile = () => api.get("user/whoami").then(res => res || false);

export {getProfile};
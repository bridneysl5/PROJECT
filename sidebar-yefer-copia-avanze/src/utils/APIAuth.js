import axios from "axios";

const APIAuth = axios.create({
    baseURL:"https://silabuz-inner-health.herokuapp.com/"
})

export default APIAuth
import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: "14354b818b7a4a85a0f4dbc740c37b0e",
    },
})
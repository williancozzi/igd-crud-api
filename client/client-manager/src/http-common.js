import axios from "axios";

// Defines the URL base for use of the service
export default axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
        "Content-type": "application/json",
    },
});

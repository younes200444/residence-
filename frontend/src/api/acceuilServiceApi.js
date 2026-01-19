import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/api/rooms" ,
    headers: {
        "Content-Type": "application/json"
    }
});


export const fetchRooms = async () => {
    const res = await API.get("/AVAILABLE");
    return res.data;
};

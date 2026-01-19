import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/api" ,
  headers: {
    "Content-Type": "application/json"
  }
});

export const loginUser = async (email, password) => {
  try {
    const res = await API.post("/user/loggin", { email, password });
    return res.data.response; // retourne l'utilisateur si succès
  } catch (err) {
    // relance l'erreur pour gérer côté frontend
    throw err;
  }
};

export const signup = async (signupForm) => {
  try {
    const res = await API.post("/user", {...signupForm });
    return res.data.response; // retourne l'utilisateur si succès
  } catch (err) {
    // relance l'erreur pour gérer côté frontend
    throw err;
  }
};
export const fetchUser = async () => {
  const res = await API.get("/users");
  return res.data;
};

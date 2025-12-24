import api from "./axios";

export const loginUser = (data) => api.post("/users/login", data);
export const signupUser = (data) => api.post("/users/register", data);
export const logoutUser = () => api.get("/users/logout");
export const getCurrentUser = () => api.get("/users/me");
export const updateProfileAPI = (userData) => api.put("/users/profile", userData);


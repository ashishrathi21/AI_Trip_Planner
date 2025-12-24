import api from "./axios";

export const createTrip = (data) => api.post("/trips/create-ai-trip", data);
export const getTrips = () => api.get("/trips/get-trips");
export const getTripById = (id) => api.get(`/trips/get-trip/${id}`);
export const savedTrip = (id) => api.put(`/trips/save-trip/${id}`);
export const getAllSavedTrips = () => api.get(`/trips/get-saved-trips`);
export const deleteTripById = (id) => api.delete(`/trips/delete-trip/${id}`);

import axios from "axios";

export const getAsesorsRequest = async () => {
  return await axios.get("http://localhost:4000/get-asesors");
};

export const signupAsesorRequest = async (user) => {
  return await axios.post("http://localhost:4000/create-asesor", user);
};


export const deleteAsesorRequest = async (asesorId) => {
  return await axios.delete(`http://localhost:4000/delete-asesor/${asesorId}`);
};
export const updateAvailabilityAsesorRequest = async (asesorId, newAvailability) => {
  return await axios.patch(`http://localhost:4000/update-availability-asesor/${asesorId}`, newAvailability);
};
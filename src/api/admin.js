import axios from "axios";

export const getAsesorsRequest = async () => {
  return await axios.get("https://yourealtor.onrender.com/get-asesors");
};

export const signupAsesorRequest = async (user) => {
  return await axios.post("https://yourealtor.onrender.com/create-asesor", user);
};


export const deleteAsesorRequest = async (asesorId) => {
  return await axios.delete(`https://yourealtor.onrender.com/delete-asesor/${asesorId}`);
};
export const updateAvailabilityAsesorRequest = async (asesorId, newAvailability) => {
  return await axios.patch(`https://yourealtor.onrender.com/update-availability-asesor/${asesorId}`, newAvailability);
};
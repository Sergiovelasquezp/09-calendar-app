import Swal from "sweetalert2";

export const modalResonse = async (icon, title, text) =>{
  return await Swal.fire({
    icon,
    title,
    text
  });
  }

import React, { useState, useEffect } from "react";
import { confirmRequest } from "../../api/auth";
import { useParams } from "react-router-dom";

const ConfirmView = () => {
  const [message, setMessage] = useState("Validando y confirmando la cuenta");
  const { token } = useParams();

  useEffect(() => {
    const confirmAccount = async () => {

      try {
        const response = await confirmRequest(token);
        const { data } = response;

        if (data.redirectUrl) {
          setMessage("Cuenta confirmada con éxito. Redirigiendo...");

          // Simula la redirección después de 5 segundos
          setTimeout(() => {
            window.location.href = data.redirectUrl;
          }, 5000);
        } else {
          setMessage(
            "No se proporcionó una URL de redirección en la respuesta."
          );
        }
      } catch (error) {
        setMessage("Error al confirmar la cuenta");
        console.log(error);
      }
    };
    confirmAccount();
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ConfirmView;

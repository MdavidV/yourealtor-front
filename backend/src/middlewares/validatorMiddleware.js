export const validateSchema = (schema) => (req, res, next) => {
  try {
    console.log(req.body)
    schema.parse(req.body);
    next();
  } catch (error) {
    // Verifica si error.errors existe y es un array antes de intentar mapearlo
    if (Array.isArray(error.errors)) {
      return res.status(400).json(error.errors.map(error => error.message));
    } else {
      // Si no, responde con un mensaje genérico o logra el error para más detalles
      console.error("Error durante la validación del esquema:", error);
      return res.status(400).json({ message: "Error en la validación de datos" });
    }
  }
};

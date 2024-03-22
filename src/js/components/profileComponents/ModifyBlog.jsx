import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form, Input } from "reactstrap";
import { updateBlogRequest } from "../../../api/blog";

const ModifyBlog = () => {
  const location = useLocation();
  const { blog } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
  });

  useEffect(() => {
    if (!blog) {
      console.log("No hay blog para modificar. Redireccionando...");
    }
    setFormData(blog);
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateBlogRequest(blog._id, formData);
      alert("Blog actualizado con éxito");
      navigate(`/blogs`);
      
    } catch (error) {
      console.error("Error al actualizar el blog:", error);
      alert("Error al actualizar el blog");
    }
  };

  return (
    <Container>
      <h1 className="section-title text-center my-3">Modifica Tu Blog</h1>
      <Form onSubmit={handleSubmit} className="create-blog-form">
        <Input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Titulo del Blog"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="summary"
          placeholder="Resumen del Blog"
          value={formData.summary}
          onChange={handleChange}
        />
        <Input
          className="textarea"
          type="textarea"
          name="content"
          value={formData.content}
          placeholder="Contenido del blog"
          onChange={handleChange}
        />
        <Button type="submit" className="secondary-button-xl my-5">
          Sube tu Blog!
        </Button>
      </Form>
    </Container>
  );
};

export default ModifyBlog;

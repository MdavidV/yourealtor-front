import React, { useState, useRef, useEffect } from "react";
import { createBlogRequest } from "../../../api/blog.js";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { useAuth } from "../../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

  const navigate = useNavigate();
  const {user} = useAuth();

  useEffect( () => {
    if(user.role != 'Admin'){
      navigate('/profile')
    }
  }, [])

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
  });

  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = new FormData();
    blogData.append("title", formData.title);
    blogData.append("summary", formData.summary);
    blogData.append("content", formData.content);
    blogData.append("image", file);

    try {
      const response = await createBlogRequest(blogData);
      setFormData({
        title: "",
        summary: "",
        content: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
      setFile(null);
      alert(response.data.message);
      console.log(response)
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <Container>
      <h1 className="section-title text-center my-3">Crea Un Blog</h1>
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
        <FormGroup className="my-3">
          <Label for="image" className="about-us-text">Sube tu imagen aqui</Label>
          <Input
            type="file"
            name="image"
            onChange={handleFileChange}
            ref={fileInputRef}
            id="image"
          />
        </FormGroup>
        <Button type="submit" className="secondary-button-xl">
          Sube tu Blog!
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBlog;

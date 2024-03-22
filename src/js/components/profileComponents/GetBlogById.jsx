import React, { useEffect, useState } from "react";
import { deleteBlogRequest, getBlogsByIdRequest } from "../../../api/blog";
import { useAuth } from "../../../contexts/AuthContext";
import { Button, Col, Row } from "reactstrap";
import { format, isValid } from "date-fns";
import { useNavigate } from "react-router-dom";

const GetBlogById = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();
  const userId = user.id;

  const navigate = useNavigate();

  const formatCreatedAt = (createdAt) => {
    if (isValid(new Date(createdAt))) {
      return format(new Date(createdAt), "dd/MM/yyyy"); // Formato de fecha personalizado
    } else {
      return "Fecha no disponible"; // O cualquier otro mensaje que desees mostrar
    }
  };

  const fetchUserBlogs = async () => {
    const response = await getBlogsByIdRequest(userId);
    console.log(response.data);
    setBlogs(response.data);
  };
  useEffect(() => {
    fetchUserBlogs();
  }, []);

  const deleteBlog = async (blogId) => {
    await deleteBlogRequest(blogId);
    fetchUserBlogs();
  };

  //   if(!blogs.length) return <div>No se encontraron blogs...</div>

  return (
    <div className="mx-5">
      <h1 className="section-title">Tus blogs</h1>

      <Row>
        <Col lg={4} xs={12}>
          <h2>Titulo Noticia</h2>
        </Col>

        <Col lg={4} xs={12}>
          <h2 className="text-center">Fecha: </h2>
        </Col>
      </Row>
      {blogs.map((blog) => (
        <Row className="justify-content-center align-items-center py-3" key={blog._id}>
          <Col lg={4} xs={12}>
            <p>{blog.title}</p>
          </Col>

          <Col lg={4}>
            <p className="text-center">{formatCreatedAt(blog.createdAt)}</p>
          </Col>

          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Button
              color="warning"
              className="me-4"
              onClick={() => {
                navigate("/profile/modify-blog", { state: { blog } });
              }}
            >
              Modificar
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteBlog(blog._id);
              }}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default GetBlogById;

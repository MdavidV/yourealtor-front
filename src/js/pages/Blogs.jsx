import React, { useEffect, useState } from "react";
import NavHeader from "../components/NavHeader.jsx";
import Footer from "../components/Footer.jsx";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import SideContact from "../components/subcomponents/sideContact.jsx";
import { getBlogsRequest } from "../../api/blog";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getBlogsRequest();

      setBlogs(response.data);
    };
    window.scrollTo(0, 0);
    fetchBlogs();
  }, []);


  const handleSubmit = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <NavHeader isHome={false} />
      <Row>
        <Col
          lg={9}
          className="d-flex flex-wrap justify-content-center align-items-center"
        >
          {blogs.map((blog) => (
            <Card key={blog._id} className="blog-card">
              <div className="blog-card-img-container">
                <img src={blog.imageUrl} alt="" className="blog-card-img" />
              </div>

              <CardBody className="d-flex flex-column">
                <CardTitle className="blog-card-title">{blog.title}</CardTitle>
                <CardSubtitle className="blog-card-subtitle">
                  {blog.summary}
                </CardSubtitle>
                <Button
                  className="primary-button-l my-3"
                  onClick={() => handleSubmit(blog.slug)}
                >
                  Leer!
                </Button>
              </CardBody>
            </Card>
          ))}
        </Col>
        <Col lg={3} className="my-5">
          <SideContact />
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default Blogs;

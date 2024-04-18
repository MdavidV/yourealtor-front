import React, { useEffect, useState } from "react";
import NavHeader from "../components/NavHeader.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import { getBlogBySlugRequest } from "../../api/blog.js";
import { Col, Row } from "reactstrap";
import SideContact from "./subcomponents/SideContact.jsx";
import { format, isValid } from "date-fns";
import OurServices from "./OurServicesSection.jsx";
import Banner from "./Banner.jsx";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  const formatCreatedAt = (createdAt) => {
    if (isValid(new Date(createdAt))) {
      return format(new Date(createdAt), "dd/MM/yyyy"); // Formato de fecha personalizado
    } else {
      return "Fecha no disponible"; // O cualquier otro mensaje que desees mostrar
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogBySlugRequest(slug);
        setBlog(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <div>Cargando...</div>;

  return (
    <>
      <NavHeader isHome={true}/>
      <Banner />
      <Row className="px-3 my-5" >
        <Col lg={9}>
          <div className="blog-detail">
            <h1 className="section-title">{blog.title}</h1>
            <div className="blog-image">
              <img src={blog.imageUrl} alt="" />
              <div className="blog-author">
                <p className="blog-author-text">
                  {blog.createdBy.firstName} {blog.createdBy.secondName}{" "}
                  {formatCreatedAt(blog.createdAt)}{" "}
                </p>
              </div>
            </div>
            <div className="blog-titles">
              <h2 className="blog-subtitle-text">{blog.summary}</h2>
            </div>

            <div className="blog-content">
              <p className="blog-content-text">{blog.content}</p>
            </div>
          </div>
        </Col>
        <Col lg={3} className="my-5">
          <SideContact />
        </Col>
      </Row>
      <Row>
        <OurServices />
      </Row>
      <Footer />
    </>
  );
};

export default BlogDetail;

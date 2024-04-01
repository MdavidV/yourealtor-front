import axios from "axios";

export const createBlogRequest = async (blogData) => {
  return await axios.post("http://localhost:4000/new-blog", blogData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getBlogsRequest = async (req, res) => {
  return await axios.get("http://localhost:4000/blogs");
};

export const getBlogBySlugRequest = async (slug) => {
  return await axios.get(`http://localhost:4000/blog/${slug}`);
};

export const getBlogsByIdRequest = async (userId) => {
  return await axios.get(`http://localhost:4000/blogs-by-asesor/${userId}`);
};

export const deleteBlogRequest = async (blogId) => {
  return await axios.delete(`http://localhost:4000/delete-blog/${blogId}`);
};


export const updateBlogRequest = async (id, blogData) => {
  return await axios.patch(`http://localhost:4000/update-blog/${id}`, blogData);
}
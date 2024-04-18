import axios from "axios";

export const createBlogRequest = async (blogData) => {
  return await axios.post("https://yourealtor.onrender.com/new-blog", blogData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getBlogsRequest = async (req, res) => {
  return await axios.get("https://yourealtor.onrender.com/blogs");
};

export const getBlogBySlugRequest = async (slug) => {
  return await axios.get(`https://yourealtor.onrender.com/blog/${slug}`);
};

export const getBlogsByIdRequest = async (userId) => {
  return await axios.get(`https://yourealtor.onrender.com/blogs-by-asesor/${userId}`);
};

export const deleteBlogRequest = async (blogId) => {
  return await axios.delete(`https://yourealtor.onrender.com/delete-blog/${blogId}`);
};


export const updateBlogRequest = async (id, blogData) => {
  return await axios.patch(`https://yourealtor.onrender.com/update-blog/${id}`, blogData);
}
import Blog from "../models/blogSchema.js";

export const createBlog = async (req, res) => {
  const { title, summary, content } = req.body;
  const userId = req.user.id;
  const imageUrl = req.fileUrl;

  try {
    console.log(req.body);

    const newBlog = new Blog({
      title,
      summary,
      content,
      imageUrl,
      createdBy: userId,
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog Creado Con exito", blog: newBlog });
  } catch (error) {
    console.error("Error al crear el blog: ", error);
    res.status(500).json({ message: "Error al crear el blog" });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate(
      "createdBy",
      "firstName secondName"
    );
    res.json(blogs);
  } catch (error) {
    res.status(500).send("Error al obtener Blogs: " + error.message);
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).populate(
      "createdBy",
      "firstName secondName"
    );

    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog no encontrado" });
    }
  } catch (error) {
    console.error("Error al encontrar el blog: ", error);
    res.status(500).json({ message: "Error al encontrar el blog" });
  }
};

export const getBlogByAsesor = async (req, res) => {
  const userId = req.params.userId;

  console.log(req.params);
  try {
    const blogs = await Blog.find({ createdBy: userId }).populate(
      "createdBy",
      "firstName secondName"
    );
    res.json(blogs);
  } catch (error) {
    console.error("Error al obtener Blogs por usuario: ", error);
    res.status(500).json({ message: "Error al obtener Blogs" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.blogId);
    console.log(blog);
    if (!blog) {
      return res
        .status(404)
        .json({ message: "No se encontró el blog con el ID proporcionado" });
    }
    res.status(200).json({ message: "Blog eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el blog: ", error);
    res.status(500).json({ message: "Error al eliminar el blog" });
  }
};

export const updateBlog = async (req, res) => { 



  const { id } = req.params;
  const { title, summary, content } = req.body;
  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog no encontrado" });
    }

    // Actualiza las propiedades del blog
    if (title) blog.title = title;
    if (summary) blog.summary = summary;
    if (content) blog.content = content;

    await blog.save(); // Guarda las actualizaciones en la base de datos

    res.status(200).json({ message: "Blog actualizado con éxito", blog });
  } catch (error) {
    console.error("Error al actualizar el blog: ", error);
    res.status(500).json({ message: "Error al actualizar el blog" });
  }
};

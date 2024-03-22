// src/routes/blogRoutes.js
import { Router } from 'express';
import { createBlog, deleteBlog, getBlog, getBlogByAsesor, getBlogs, updateBlog } from '../controllers/blogController.js';
import { authRequired } from '../middlewares/verifyToken.js';
import { uploadFileToS3 } from '../middlewares/uploadFile.js';



const router = Router();



router.post('/new-blog', authRequired, uploadFileToS3, createBlog);
router.get('/blogs',  getBlogs);
router.get('/blog/:slug', getBlog);
router.get('/blogs-by-asesor/:userId', getBlogByAsesor);
router.delete('/delete-blog/:blogId', deleteBlog);
router.patch('/update-blog/:id', updateBlog);

export default router;

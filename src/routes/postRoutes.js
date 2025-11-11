import express from "express";

import {
    createPost,
    getAllPost,
    deletePost,
}from "../controllers/postController.js"

const router = express.Router();

router.post("/",createPost);
router.get("/", getAllPost);
router.delete("/:id",deletePost);


export default router;
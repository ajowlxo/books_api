import express from "express";
import {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
} from "../Controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;

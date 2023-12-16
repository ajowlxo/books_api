import { Book } from "../Models/bookModel.js";

export const createBook = async (req, res) => {
  const { title, author, publishYear } = req.body;
  const newBook = new Book({ title, author, publishYear });
  try {
    await newBook.save();
    return res.status(200).send("new bok created successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    return res.status(200).send({
      count: allBooks.length,
      data: allBooks,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).send({ message: message.error });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;
    await Book.findByIdAndUpdate(id, { title, author, publishYear });
    return res.status(200).json("contact updated successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      res.status(404).json("no book found");
    }
    res.status(200).json("Book deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: message.error });
  }
};

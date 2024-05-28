const Book = require("../models/book");
const BookInstance = require("../models/bookInstance");
const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

// Display list of all BookInstances.
exports.bookInstance_list = asyncHandler(async (req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();

    res.render("bookInstance_list", {
        title: "Book Instance List",
        bookInstance_list: allBookInstances,
    });
});

// Display detail page for a specific BookInstance.
exports.bookInstance_detail = asyncHandler(async (req, res, next) => {
    const bookInstance = await BookInstance.findById(req.params.id)
        .populate("book")
        .exec();

    if (bookInstance === null) {
        // No results.
        const err = new Error("Book copy not found");
        err.status = 404;
        return next(err);
    }

    res.render("bookInstance_detail", {
        title: "Book:",
        bookInstance: bookInstance,
    });
});

// Display BookInstance create form on GET.
exports.bookInstance_create_get = asyncHandler(async (req, res, next) => {
    const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

    res.render("bookInstance_form", {
      title: "Create BookInstance",
      book_list: allBooks,
    });
});

// Handle BookInstance create on POST.
exports.bookInstance_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
});

// Display BookInstance delete form on GET.
exports.bookInstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
});

// Handle BookInstance delete on POST.
exports.bookInstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
});

// Display BookInstance update form on GET.
exports.bookInstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
});

// Handle bookInstance update on POST.
exports.bookInstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
});
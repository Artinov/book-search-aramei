$(document).ready(function() {
    renderBook();
});

function renderBook() {
    var bookId = window.location.pathname.split("/").pop();

    $.ajax({
        url: "/book",
        method: "POST",
        data: {
            bookId: bookId,
        }
    }).then(function(book) {
        var book = book.pop();

        var $bookTemplate = $("#book");

        $bookTemplate.find("[data-book-name]").text(book.name);
        $bookTemplate.find("[data-book-author]").text(book.author);
        $bookTemplate.find("[data-book-image]").attr("src", book.picture);
        $bookTemplate.find("[data-book-tags]").text(book.tags);
        $bookTemplate.find("[data-book-description]").text(book.about);
    });
}
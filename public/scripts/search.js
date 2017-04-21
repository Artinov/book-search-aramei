$(document).ready(function() {
    bookSearch();
});

function bookSearch() {
    $("#searchButton").click(function(e){
        e.preventDefault();
        var searchRequest = $("#searchInput").val();
        $.ajax({
            url: "/searchresult",
            method: "POST",
            data: {
                searchRequest: searchRequest
            },
        }).then(function(books) {
                var $booksWrapper = $("#books");

                books.forEach(function(book) {
                var $bookTemplate = $("#template > div").clone();

                $bookTemplate.find("[data-book-name]").text(book.name);
                $bookTemplate.find("[data-book-author]").text(book.author);
                $bookTemplate.find("[data-book-image]").attr("src", book.picture);
                $bookTemplate.find("[data-book-tags]").text(book.tags);
                $bookTemplate.find("[data-book-link]").attr("href", "/book/" + book._id);

                $booksWrapper.append($bookTemplate);
            });
        });
        
    })
}
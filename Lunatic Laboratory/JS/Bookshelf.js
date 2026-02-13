class Book
{
    constructor()
    {
        this.title = title;
        this.author = author;
        this.description = description;
        this.chapters = chapters;
        this.year = year
    }

    age()
    {
        const date = new Date();
        return date.getFullYear()
    }

}  

function displayBook()
{
    const book_1 = new Book("Artificial Insanity", "Thomas Johnson", "Test", 3, 2025);
    const book_2 = new Book("Ghastly Night", "Thomas Johnson", "Test", "4 Pages", 2025);
}

displayBook();
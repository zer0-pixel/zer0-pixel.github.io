class Book
{
    constructor(title, author, chapters, year)
    {
        this.title = title;
        this.author = author;
        this.chapters = chapters;
        this.year = year
        this.status = ["OnGoing","Finished","Hiatus", "N/A"];
    }

    age()
    {
        const date = new Date();
        return date.getFullYear()
    }
}

function displayBook()
{
    const book_1 = new Book("Artificial Insanity | Volume - 1", "Thomas Johnson", 3, 2025);
    document.getElementById('book').innerHTML = 
    "Title: " + book_1.title + "<br>By: " + book_1.author + "<br>Chapters: " + book_1.chapters + "<br>Began writing: March 1st " + book_1.year + ' - ' + 
    book_1.age() + " | Status: " + '(' + book_1.status[0] + ')';

    const book_2 = new Book("Ghastly Night", "Thomas Johnson", 28, 2025);
    document.getElementById('book_2').innerHTML = 
    "Title: " + book_2.title + "<br>By: " + book_2.author + "<br>Chapters: " + book_2.chapters + "<br>Began writing: August 18th " + book_2.year + ' - ' + 
    book_2.age() + " | Status: " + '(' + book_2.status[1] + ')';

    const book_3 = new Book("Generation Bravo", "Thomas Johnson", "N/A", 2026);
    document.getElementById('book_3').innerHTML =
    "Title: " + book_3.title + "<br>By: " + book_3.author + "<br>Chapters: " + book_3.chapters + `<br>` + book_3.year + `| Status: ` + "(" + book_3.status[3] + ")";
}

function punctuationIndex()
{
    let index = document.getElementById('index_card');

    const period = document.getElementById('period');
    const question = document.getElementById('question_mark');
    const exclamation = document.getElementById('exclamation_point');
    const apostrophe = document.getElementById('apostrophe');
    const hyphen = document.getElementById('hyphen');
    const dash = document.getElementById('dash');
    const quotation = document.getElementById('quotation_marks');
    const trio = document.getElementById('punct_trio');
    const ellipsis = document.getElementById('ellipsis');

    period.innerHTML = "Placed at the end of a sentence; as," + "<br><em>-We always try our hardest.</em>";
    question.innerHTML = "Indicates a question; as," + "<br><em>-Where did Charlene go?</em>";
    exclamation.innerHTML = "Denotes humour or strong feeling; as," + "<br><em>-I think we did it -- we faced our fears, overcoming them. We did it!</em>";
    apostrophe.innerHTML = "Denotes that a letter or letters are left out; as," + "<br><em>-Hey, I can share some of my food if you'd like.</em>";
    hyphen.innerHTML = "Used between syllables in a word divided at the end of a line; as," + "<br><em>-Hel-lo or Good-bye</em><br>" 
                     + "And is used in compund words; as," + "<br><em>-Well-being or seven : fifty-nine</em>";
    dash.innerHTML = "Used where there is a sudden break or pause in a sentence; as," 
                   + "<br><em>-This room is an office -- a wrecked office, from the ceiling, from the floor, and to the walls; wrecked.</em>";
    quotation.innerHTML = "Denotes the words of another; as," + `<br><em>-"Goodbye.", whispered Zero, as she leaves the snoring scientist resting in the room alone.</em>`;
    trio.innerHTML = "Marks grammatical division in a sentence; as," + "<br><em>-The movie theater has three popcorn flavors: buttered, cajun, and plain;</em>"
                   + "these flavorful options are regarded as good, great, and alright.";
    ellipsis.innerHTML = "Used to indicate an omission in quoted material, a pause in a speech, or an unfinished thought; as," 
                   + "<br><em>-Eunice and Bob introduced themselves...well, tried to; but were ignored by Ashley, instead she ran straight to Josh.</em>";
}

displayBook();
punctuationIndex();

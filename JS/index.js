// Update News
function text()
{
    const texts = 
    [
        "Hello. I have come with updates. \nI have completed my Ascii_Scan program, it will be available for download on another new page. ", 
        "Check out this sketch I drew: \n", 
        "Here is some concept art i've drawn for my game"
    ];
    const text_id = ["update", "update_2", "update_3"];
    let index = 0;
    let char = 0;

    function typing()
    {
        if (index < texts.length)
        {
            const currentText = texts[index];
            const textID = text_id[index] || "update";
            const text = document.getElementById(textID);

            if (char < currentText.length)
            {
                text.textContent += currentText[char];
                char++;
                setTimeout(typing, 10);
            }
            else
            {
                index++;
                char = 0;
                setTimeout(typing, 500);
            }
        }
    }
    typing();

}

function messageBoard()
{
    const welcome = `${"=".repeat(38)}\nWhat's New!\n${"=".repeat(40)}`;
    const msgBoard = document.getElementById('msgBoard');
    msgBoard.textContent += welcome;
}
//END//

//Bookshelf/Books
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
//END//

// Custom cursor
function cursor(size)
{
    document.querySelectorAll('.cursor').forEach(el => el.remove());

    document.body.style.cursor = "none";
    const cursor = document.createElement("img");
    cursor.className = 'cursor';
    cursor.src = "./GIFS/cursor.gif";
    cursor.style.position = "absolute";
    cursor.style.pointerEvents = "none";
    cursor.style.width = size + "px";
    cursor.style.height = size + "px";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", e =>
    {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });
}

// Cursor tail
function cursorTail(src, count = 8, size = 40, easing = 1)
{
    document.querySelectorAll('.cursor-tail').forEach(el => el.remove());

    trailActive = true;
    let m_x = window.innerWidth / 2;
    let m_y = window.innerHeight / 2;

    document.addEventListener('mousemove', e =>
    {
        m_x = e.pageX;
        m_y = e.pageY;
    });

    const follow = [];
    for (let i = 0; i < count; i++)
    {
        const f = document.createElement('img');
        f.src = src;
        f.className = 'cursor-tail';
        f.style.width = size + 'px';
        f.style.height = size + 'px';
        f.style.pointerEvents = 'none';
        document.body.appendChild(f);
        follow.push({ el:f, x:m_x, y:m_y});
    }

    function gravPull()
    {
        if (!trailActive) return;

        follow[0].x += (m_x - follow[0].x) * easing;
        follow[0].y += (m_y - follow[0].y) * easing;
        follow[0].el.style.left = follow[0].x + "px";
        follow[0].el.style.top = follow[0].y + "px";

        for (let i = 1; i < follow.length; i++)
        {
            const prev = follow[i - 1];
            const f = follow[i];
            f.x += (prev.x - f.x) * easing;
            f.y += (prev.y - f.y) * easing;
            f.el.style.left = f.x + 'px';
            f.el.style.top = f.y + 'px';
            f.el.style.opacity = 1 - i / follow.length;
        }
        requestAnimationFrame(gravPull);
    }
    gravPull();
}

//Custom Cursor / Tail
cursor(22);
cursorTail("./GIFS/plus.gif", 8, 22, 0.1);


//Bookshelf
displayBook();
punctuationIndex();

//Update News
text();
messageBoard();

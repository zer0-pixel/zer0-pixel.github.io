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
                setTimeout(typing, 30);
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
    const welcome = `${"=".repeat(70)}\nWhat's New!\n${"=".repeat(70)}`;
    const msgBoard = document.getElementById('msgBoard');
    msgBoard.textContent += welcome;
}

text();
messageBoard();

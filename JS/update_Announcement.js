// Update News
function text()
{
    const text = "Hello, I love reading and writing.";
    let index = 0;

    function typingEffect()
    {
        if (index < text.length)
        {
            document.getElementById("typing").textContent += text[index];
            index++;
            setTimeout(typingEffect, 30); // Speed
        }
    }
    typingEffect();
}

function messageBoard()
{
    const welcome = `${"=".repeat(70)}\nWelcome\n${"=".repeat(70)}`;
    const msgBoard = document.getElementById('msgBoard');
    msgBoard.textContent += welcome;
}

text();
messageBoard();
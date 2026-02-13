// Update News
function text()
{
    const text = "Hello, I like animation and coding.";
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
text();

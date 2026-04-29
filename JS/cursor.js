// Custom cursor
function cursor()
{
    document.querySelectorAll('.cursor').forEach(el => el.remove());

    document.body.style.cursor = "none";
    const cursor = document.createElement("img");
    cursor.className = 'cursor';
    cursor.src = "./GIFS/cursor.gif";
    cursor.style.position = "absolute";
    cursor.style.pointerEvents = "none";
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

cursor();
cursorTail("./GIFS/plus.gif", 8, 30, 0.1);


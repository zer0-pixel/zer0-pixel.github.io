let canvas, ctx;

const debug_mode = false;

//Bubbles(servers or media space)
class Bubbles
{
    constructor()
    {
        this.bubble_img = new Image();
        this.bubble_img.src = './Bubbl Project/Bubbles/big_bubble_MAGENTA.png'
        this.bubble_id = Math.random().toString(36).substring(2, 9);
        this.bubbles = [];
    }

    createBubble(name)
    {  
        const bubble = 
        {
            name: name,
            id: Math.random().toString(36).substring(2, 9),
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        };
        this.bubbles.push(bubble);
    }
    
    addBubble(name, id)
    {
        const bubble =
        {

        }
    }

    deleteBubble()
    {
        this.bubble.pop(bubbleArray);
    }

    draw(ctx)
    {
        for (const b of this.bubbles)
        {
            ctx.drawImage(this.bubble_img, b.x, b.y);
            if (debug_mode)
                {
                    ctx.fillStyle = 'white';
                    ctx.fillText(b.name, b.x + 10, b.y + 10);
                }
        }
    }
}

//Canvas Physics
class RandomPhysics
{
    constructor(x, y, vx, vy)
    {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    update()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
    
    bounce(width = 912, height = 400, radius = 0, otherRadius = 63)
    {
        //left
        if (this.x <= radius)
        {
            this.x = radius;
            this.vx *= -1;
        }
        //right
        if (this.x >= width - otherRadius)
        {
            this.x = width - otherRadius;
            this.vx *= -1;
        }
        //top
        if (this.y <= radius)
        {
            this.y = radius;
            this.vy *= -1;
        }
        //bottom
        if (this.y >= height - otherRadius)
        {
            this.y = height - otherRadius;
            this.vy *= -1;
        }
    }
}

class Gravity
{
    constructor(x, y, vy = 2)
    {
        this.x = x;
        this.y = y;
        this.vy = vy;
    }

    update()
    {
        this.y += this.vy;
    }

    bottomStop(height, radius = 0)
    {
        if (this.y >= height - radius)
        {
            this.y = height - radius;
            this.vy = 0;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById('interactive');
    
    canvas.style.backgroundColor = "black";
    canvas.width = 912;
    canvas.height = 400;
    ctx = canvas.getContext('2d');
    main();
})

function main()
{
    const bubble = new Bubbles();
    //Amount
    for (let i = 0; i < 30; i++)
    {
        const name = `Bubble_${i}`;
        bubble.createBubble(name);

        const b = bubble.bubbles[i];
        b.physics = new RandomPhysics(b.x, b.y, b.vx, b.vy);
    }

    function animate()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const b of bubble.bubbles)
        {
            b.physics.update();
            b.physics.bounce(canvas.width, canvas.height);
            b.x = b.physics.x;
            b.y = b.physics.y;
        }

        

        bubble.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();

}

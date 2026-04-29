class NewsUpdate
{
    constructor(news)
    {
        this.news = news;
        this.index = 0;
    }

    next()
    {
        if (this.index < this.news.length)
        {
            return {value: this.news[this.index++], done: false};
        }
        return {done: true};
    }
}

const feed = new NewsUpdate([
    {date: "5/27/2025", text: "I am close to finishing my first sticker. Today I later realized that there is a mistake in my story 'artificial_Insanity'. I am deciding wether to fix it now or when I finish the rough draft."},
    {date: "6/1/2025", text: "I have finished my drawing and it is time to make a design for the sticker today. Yesterday I finally got back to writing my story, I will get back to it after getting food writing this. I've learned a lot over the years and will continue to learn."},
    {date: "6/1/2025", text: "Today I am very happy with my first sticker design. I had finished the drawing tonight and will start with 12 sticker pack. Deciding where to sell them."},
    {date: "7/9/2025", text: "Yesterday my stickers arrived, I am figuring out how to sell them and currently working on a note book design. I am still working on my story I am brain storming a lot on it, hoping to get it done by this year. I also finished my summer schooling."},
    {date: "8/3/2025", text: "Today I got banned of KDP again, I am switching to physical sells like shopify. I want to say I am half way with my story, but time will tell."}
]);

function scrollLatest()
{
    const container = document.getElementById("text");
    container.scrollTop = container.scrollHeight;
}

function newsFeedUpdate()
{
    const next = feed.next();
    if (!next.done)
    {
        document.getElementById("text").insertAdjacentHTML("beforeend", `<p><strong>${next.value.date}</strong>: ${next.value.text}</p>`);
        scrollLatest();
    }
}

let intervalID;
function updateNews()
{
    intervalID = setInterval(newsFeedUpdate, 300);
}
document.querySelector(`[onclick="openTab('news', 'main')"]`).addEventListener("click", updateNews);
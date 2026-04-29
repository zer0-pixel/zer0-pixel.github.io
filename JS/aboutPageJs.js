async function file()
{
    try
    {
        const response = await fetch('zero_ascii.txt');
        if (!response.ok) throw new Error('File not found');
        const text = await response.text();
        console.log(text);
        return(text);
    } catch (error){
        console.error('Fetch error:', error);
    }
}

async function main()
{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let data = await file();

    ctx.font = '19px Arial'
    ctx.fillText(data, 1, 200);
    ctx.textAlign = 'center';
}

main();